import * as Bowser from "bowser";

export default class BrowserDetect {
  private browser;
  private browserData;
  private browserDetected;
  private browserType;
  private bodyElement: HTMLElement | null;
  private bodyClass;

  constructor() {
    this.browser = Bowser.getParser(window.navigator.userAgent);
    this.browserData = this.browser.parsedResult;
    this.browserDetected = this.browserData.browser;
    this.browserType = this.browserData.platform.type;
    this.bodyElement = document.querySelector<HTMLElement>("body");
    this.bodyClass = (this.bodyElement !== null) ? this.bodyElement : null;

    this.checkBrowser();
    this.checkTablet();
    this.checkMobile();
    this.checkWinOS();
  }

  checkBrowser(): void {
    if (this.browserDetected.name === "Internet Explorer") {
      const version:string = "ie_" + Math.floor(this.browserDetected.version);
      this.bodyClass.add('ie');
      this.bodyClass.add(version);
    } else if (this.browserDetected.name === "Microsoft Edge") {
      this.bodyClass.add("edge");
    } else if (this.browserDetected.name === "Firefox") {
      this.bodyClass.add("ff");
    } else if (this.browserDetected.name === "Safari") {
      this.bodyClass.add("safari");
    }
  }

  checkTablet(): void {
    if (this.browserType == "tablet") {
      this.bodyClass.add("tablet");
    }
  }

  checkMobile(): void {
    if (this.browserType === "mobile") {
      this.bodyClass.add("device--mobile");
      if (this.browserType === "Android") {
        this.bodyClass.add("device--mobile--android");
      }
    }
  }

  checkWinOS(): void {
    let os: string,
      ua: string = navigator.userAgent;
    if (ua.match(/Win(dows )?NT 10\.0/)) {
      os = "win10";
    } else if (ua.match(/Win(dows )?NT 6\.3/)) {
      os = "win8_1";
    } else if (ua.match(/Win(dows )?NT 6\.2/)) {
      os = "win8";
    } else if (ua.match(/Win(dows )?NT 6\.1/)) {
      os = "win7";
    } else {
      os = "";
    }

    if (os) this.bodyClass.add(os);
  }
}