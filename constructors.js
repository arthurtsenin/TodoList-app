function Tasks(description) {
  this.description = description
  this.createdAt = new Date()
  this.id = this.createdAt.getTime()
  this.isChecked = false
}

export { Tasks }