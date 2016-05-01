export default class Article extends service.Model {
  static label = 'Article';
  static fields = {
    title: {
      label: 'Title',
      type: String
    },
    cat: {
      label: 'Category',
      ref: 'ArticleCat',
      required: true
    },
    content: {
      label: 'Content',
      type: 'html'
    },
    createdAt: {
      label: 'Created At',
      type: Date
    }
  };

  preSave() {
    if (!this.createdAt) {
      this.createdAt = new Date;
    }
  }
}
