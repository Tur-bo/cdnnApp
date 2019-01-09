<template>
    <div class="map"> 
      <el-amap vid="amap" :plugin="plugin" class="amap-demo" :center="center">
      </el-amap>

      <div class="toolbar">
        <label>自动定位</label>
        <span v-if="loaded">
          location: lng = {{ lng }} lat = {{ lat }}
          address:{{ addr }}
        </span>
        <span v-else>正在定位</span>

        <label>拖曳定位</label>
      </div>
    </div>
  </template>

  <style>
    .map{
        height:300px;
    }
    .amap-demo {
      height: 300px;
    }
  </style>

  <script>
    module.exports = {
      data() {
        let self = this;
        return {
          center: [121.59996, 31.197646],
          lng: 0,
          lat: 0,
          loaded: false,
          plugin: [{
            pName: 'Geolocation',
            events: {
              init(o) {
                // o 是高德地图定位插件实例
                o.getCurrentPosition((status, result) => {
                  if (result && result.position) {
                    console.log(result)
                    self.lng = result.position.lng;
                    self.lat = result.position.lat;
                    self.center = [self.lng, self.lat];
                    self.loaded = true;
                    self.addr =  result.formattedAddress
                    self.$nextTick();
                  }
                });
              }
            }
          }]
        };
      }
    };
</script>