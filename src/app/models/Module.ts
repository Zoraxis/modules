export class Module {
  title: string;
  price: number = 0;
  icon: string;

  constructor(title: string = 'Module', price: number = 0, icon = 'face') {
    this.title = title;
    this.price = price;
    this.icon = icon;
  }

  //TODO: this getter is unused
  getSlug() {
    return this.title.toLowerCase().replace(/\s/g, '-');
  }
}
