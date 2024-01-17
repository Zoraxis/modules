export class Module {
  title: string;
  price: number = 0;

  constructor(title: string = 'Module', price: number = 0) {
    this.title = title;
    this.price = price;
  }

  getSlug() {
    return this.title.toLowerCase().replace(/\s/g, '-');
  }
}
