import * as Bowser from "bowser";

export default class BrowserDetect {
  private browser;
  private browserData;
  private browserDetected;
  private browserType;
  private bodyElement: HTMLElement | null;

  constructor() {
    this.browser = Bowser.getParser(window.navigator.userAgent);
    this.browserData = this.browser.parsedResult;
    this.browserDetected = this.browserData.browser;
    this.browserType = this.browserData.platform.type;
    this.bodyElement = document.body;

    this.checkBrowser();
    this.checkTablet();
    this.checkMobile();
    this.checkWinOS();
  }

  checkBrowser(): void {
    if (this.browserDetected.name === "Internet Explorer") {
      const version:string = "ie_" + Math.floor(this.browserDetected.version);
      this.bodyElement?.classList.add('ie');
      this.bodyElement?.classList.add(version);
    } else if (this.browserDetected.name === "Microsoft Edge") {
      this.bodyElement?.classList.add("edge");
    } else if (this.browserDetected.name === "Firefox") {
      this.bodyElement?.classList.add("ff");
    } else if (this.browserDetected.name === "Safari") {
      this.bodyElement?.classList.add("safari");
    }
  }

  checkTablet(): void {
    if (this.browserType == "tablet") {
      this.bodyElement?.classList.add("tablet");
    }
  }

  checkMobile(): void {
    if (this.browserType === "mobile") {
      this.bodyElement?.classList.add("device--mobile");
      if (this.browserType === "Android") {
        this.bodyElement?.classList.add("device--mobile--android");
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

    if (os) this.bodyElement?.classList.add(os);
  }
}