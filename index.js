class Formatter {
  static capitalize(string) {
    // Capitalize the first letter and return the rest of the string
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    // Remove non-alphanumeric characters except for dash, single quote, and space
    return string.replace(/[^a-zA-Z0-9\-\'\s]/g, '');
  }

  static titleize(string) {
    const exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    const words = string.split(' ');

    // Capitalize all words except exceptions
    for (let i = 0; i < words.length; i++) {
      if (i === 0 || !exceptions.includes(words[i])) {
        words[i] = this.capitalize(words[i]);
      }
    }

    // Always capitalize the first word
    words[0] = this.capitalize(words[0]);

    return words.join(' ');
  }
}
