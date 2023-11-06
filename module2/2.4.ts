{
  // generic  with interface

  //   interface Developer<T, X> {
  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
  };

  //   const poorDeveloper: Developer<{
  //     brand: string;
  //     model: string;
  //     display: string;
  //   }> = {
  //   const poorDeveloper: Developer<EmilabWatch, null> = {
  const poorDeveloper: Developer<EmilabWatch> = {
    name: "mariam",
    computer: {
      brand: "Asus",
      model: "s15-f20",
      releaseYear: 2018,
    },
    smartWatch: {
      brand: "emilab",
      model: "kw55",
      display: "oled",
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface YamahaBike {
    model: string;
    engine: string;
  }
  //   const richDeveloper: Developer<{
  //     brand: string;
  //     model: string;
  //     heartTrack: boolean;
  //     sleepTrack: boolean;
  //   }> = {
  const richDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: "swarna",
    computer: {
      brand: "hp",
      model: "p32-f20",
      releaseYear: 2019,
    },
    smartWatch: {
      brand: "apple",
      model: "s18",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "yamaha",
      engine: "100cc",
    },
  };
}
