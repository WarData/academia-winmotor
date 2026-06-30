import { learningContent, getContentByModule, getContentById, getFlowItems, getStepInstructions, resolveKnowledgeResource } from './content';

// Type definitions for content items
export interface ContentItem {
  id: string;
  title: string;
  module: string;
  process: string;
  type: 'video' | 'help';
  source: 'youtube' | 'gitbook';
  url: string;
  keywords: string[];
}

export interface ModuleContent {
  module: string;
  items: ContentItem[];
  count: number;
}

export interface SearchResult {
  item: ContentItem;
  relevance: number;
}

// Content Adapter Class
export class ContentAdapter {
  private content: ContentItem[];

  constructor() {
    this.content = learningContent;
  }

  /**
   * Get all content items
   */
  getAllContent(): ContentItem[] {
    return this.content;
  }

  /**
   * Get content items by module
   */
  getByModule(module: string): ContentItem[] {
    return getContentByModule(module);
  }

  /**
   * Get a single content item by ID
   */
  getById(id: string): ContentItem | undefined {
    return getContentById(id);
  }

  /**
   * Get content items by type
   */
  getByType(type: 'video' | 'help'): ContentItem[] {
    return this.content.filter(item => item.type === type);
  }

  /**
   * Get content items by process
   */
  getByProcess(process: string): ContentItem[] {
    return this.content.filter(item => item.process === process);
  }

  /**
   * Search content by keywords
   */
  search(query: string): SearchResult[] {
    const lowercaseQuery = query.toLowerCase();
    const results: SearchResult[] = [];

    this.content.forEach(item => {
      let relevance = 0;

      // Check title
      if (item.title.toLowerCase().includes(lowercaseQuery)) {
        relevance += 10;
      }

      // Check keywords
      const matchingKeywords = item.keywords.filter(keyword =>
        keyword.toLowerCase().includes(lowercaseQuery)
      );
      relevance += matchingKeywords.length * 5;

      // Check process
      if (item.process.toLowerCase().includes(lowercaseQuery)) {
        relevance += 3;
      }

      if (relevance > 0) {
        results.push({ item, relevance });
      }
    });

    return results.sort((a, b) => b.relevance - a.relevance);
  }

  /**
   * Get grouped content by module
   */
  getGroupedByModule(): ModuleContent[] {
    const grouped = new Map<string, ContentItem[]>();

    this.content.forEach(item => {
      if (!grouped.has(item.module)) {
        grouped.set(item.module, []);
      }
      grouped.get(item.module)!.push(item);
    });

    return Array.from(grouped.entries()).map(([module, items]) => ({
      module,
      items,
      count: items.length
    }));
  }

  /**
   * Get learning flow for a module
   */
  getModuleFlow(module: string): ContentItem[] {
    return getFlowItems(module);
  }

  /**
   * Get step instructions for a process
   */
  getProcessSteps(processId: string): string[] {
    return getStepInstructions(processId);
  }

  /**
   * Resolve knowledge resource type
   */
  resolveResource(contentId: string): { type: string; url: string } | null {
    return resolveKnowledgeResource(contentId);
  }

  /**
   * Get video content only
   */
  getVideos(): ContentItem[] {
    return this.getByType('video');
  }

  /**
   * Get help documentation only
   */
  getHelpDocs(): ContentItem[] {
    return this.getByType('help');
  }

  /**
   * Get content statistics
   */
  getStats() {
    const modules = new Set(this.content.map(item => item.module));
    const processes = new Set(this.content.map(item => item.process));
    const videos = this.getVideos().length;
    const helpDocs = this.getHelpDocs().length;

    return {
      total: this.content.length,
      modules: modules.size,
      processes: processes.size,
      videos,
      helpDocs,
      moduleList: Array.from(modules),
      processList: Array.from(processes)
    };
  }

  /**
   * Get related content based on keywords
   */
  getRelatedContent(contentId: string, limit: number = 5): ContentItem[] {
    const item = this.getById(contentId);
    if (!item) return [];

    const relatedScores = new Map<string, number>();

    this.content.forEach(candidate => {
      if (candidate.id === contentId) return;

      let score = 0;

      // Same module bonus
      if (candidate.module === item.module) score += 5;

      // Same process bonus
      if (candidate.process === item.process) score += 3;

      // Shared keywords
      const sharedKeywords = candidate.keywords.filter(k =>
        item.keywords.includes(k)
      );
      score += sharedKeywords.length * 2;

      if (score > 0) {
        relatedScores.set(candidate.id, score);
      }
    });

    return Array.from(relatedScores.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit)
      .map(([id]) => this.getById(id)!)
      .filter(Boolean);
  }
}

// Export singleton instance
export const contentAdapter = new ContentAdapter();

// Export convenience functions
export const getContentByModuleAdapter = (module: string) => contentAdapter.getByModule(module);
export const getContentByIdAdapter = (id: string) => contentAdapter.getById(id);
export const searchContent = (query: string) => contentAdapter.search(query);
export const getModuleFlowAdapter = (module: string) => contentAdapter.getModuleFlow(module);
export const getRelatedContentAdapter = (contentId: string, limit?: number) => contentAdapter.getRelatedContent(contentId, limit);
