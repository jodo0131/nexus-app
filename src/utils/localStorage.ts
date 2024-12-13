/**
 * @param key
 * @param obj
 *
 * const user = getLocalStorage<User>('user');
 * setLocalStorage<User>('user', user);
 *
 */

export function setLocalStorage<T>(key: string, obj: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(obj));
  } catch (e) {
    console.error('Failed to save to localStorage:', e);
  }
}

/**
 *
 * @param key
 * @returns
 *
 * const user = getLocalStorage<User>('user');
 *
 */
export function getLocalStorage<T>(key: string): T | null {
  try {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  } catch (e) {
    console.error('Failed to retrieve from localStorage:', e);
    return null;
  }
}
