{
  // interface t - generic

  // globally handle type
  interface Developer<T, X> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  // ------> example - 1
  // for simplify code
  type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<EmilabWatch, null> = {
    name: "poor dev",
    computer: {
      brand: "windows",
      model: "x-2022",
      releaseYear: 2012,
    },
    smartWatch: {
      brand: "Emilab",
      model: "kw66",
      display: "OLED",
    },
  };

  //------> example - 2
  // for simplify code
  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    brainCatch: boolean;
  }
  interface YamahaBike {
    brand: string;
    model: string;
  }

  const richDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: "rich dev",
    computer: {
      brand: "hp",
      model: "x-20288",
      releaseYear: 2018,
    },
    smartWatch: {
      brand: "apple",
      model: "something",
      heartTrack: true,
      brainCatch: true,
    },
    bike: {
      brand: "Yamaha",
      model: "R15",
    },
  };
}
