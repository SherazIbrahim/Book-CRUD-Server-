function book(id, title,author,no_pages,published_at) {
    this.id = id,
    this.title = title,
    this.author = author,
    this.no_of_pages = no_pages,
    this.published_at = published_at
}

module.exports = book;