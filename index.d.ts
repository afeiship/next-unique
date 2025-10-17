interface NxStatic {
  /**
   * Returns a new array with unique elements.
   * @template T - Type of array elements
   * @param {T[]} inArray - The input array to remove duplicates from
   * @param {string} [inIdKey] - Optional key path for object arrays (e.g., 'id' or 'user.info.id')
   * @returns {T[]} A new array with unique elements
   */
  unique<T>(inArray: T[], inIdKey?: string): T[];
}
