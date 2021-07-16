abstract class Animal {
  abstract Ruido(): void;
}

class Gato extends Animal {
  Ruido(): void {
    console.log("Miau");
  }
}

class Perro extends Animal {
  Ruido(): void {
    console.log("Guau");
  }
}
