import { sources } from "./sources";

function getGitbookUrl(module) {
  const modulePath = sources.gitbook.modules[module] ?? "";
  return new URL(modulePath.replace(/^\//, ""), sources.gitbook.base).toString();
}

export const learningContent = [];

export function getContentByModule(module) {
  return learningContent.filter((item) => item.module === module);
}

export function getContentById(id) {
  return learningContent.find((item) => item.id === id) || null;
}

export function getFlowItems(module) {
  return learningContent.filter((item) => item.module === module);
}

export function getFirstFlowItem(module) {
  const items = getFlowItems(module);
  return items.length > 0 ? items[0] : null;
}

export const moduleQuizzes = {};

export function getModuleQuiz(module) {
  return moduleQuizzes[module] || null;
}
