export default class Gmap {
  constructor(
    target = "map",
    styles = [
      {
        stylers: [
          { visibility: "on" },
          { saturation: -100 },
          { lightness: 28 },
          { gamma: 0.98 }
        ]
      }
    ],
    center = { lat: 35.010824, lng: 135.75971 },
    pins = { lat: 35.010824, lng: 135.75971 },
    settings = {
      zoom: 17,
      icon: "",
      title: "map"
    }
  ) {
    this.target = target;
    this.styles = styles;
    this.center = center;
    this.pins = [pins];
    this.settings = settings;
  }

  exec() {
    const colorName = "thisstyle";
    const settings = this.settings;
    const MAP = document.getElementById(this.target);
    const myOptions = {
      zoom: settings.zoom,
      center: new google.maps.LatLng(this.center.lat, this.center.lng),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      streetViewControl: false,
      mapTypeControl: false,
      zoomControl: true,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE
      },
      scrollwheel: false
    };

    const map = new google.maps.Map(MAP, myOptions);

    //デザイン設定と地図タイプの名前を反映
    map.mapTypes.set(
      colorName,
      new google.maps.StyledMapType(this.styles, { name: colorName })
    );
    map.setMapTypeId(colorName);

    //marker
    _.each(this.pins, function(pin) {
      let marker = new google.maps.Marker();
      marker.setPosition(new google.maps.LatLng(pin.lat, pin.lng));
      marker.setIcon(settings.icon);
      marker.setTitle(settings.title);
      marker.setMap(map);
    });
  }
}
