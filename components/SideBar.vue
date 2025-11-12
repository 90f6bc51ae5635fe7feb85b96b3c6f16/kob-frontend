<template>
  <div class="manu-sidebar">
    <a
      href="https://www.facebook.com/modnganbeauty"
      target="_blank"
      style="text-decoration: none !important"
      id="tooltip-target-1"
    >
      <img class="mt-2" src="~/assets/Fbb.png" alt="facebook" />
      <b-tooltip
        target="tooltip-target-1"
        triggers="hover"
        placement="left"
        variant="primary"
      >
        <h5>เฟสบุ๊ค</h5>
      </b-tooltip>
    </a>
    <a
      href="tel:0994619241"
      style="text-decoration: none !important"
      id="tooltip-target-2"
    >
      <img class="mt-2" src="~/assets/tel.png" alt="tel" />
      <b-tooltip
        target="tooltip-target-2"
        triggers="hover"
        placement="left"
        variant="success"
      >
        <h5>เบอร์โทรศัพท์</h5>
      </b-tooltip>
    </a>
    <a
      href="https://www.google.com/maps/dir//%E0%B8%81%E0%B8%9A%E0%B8%81%E0%B8%B4%E0%B9%8A%E0%B8%9F%E0%B8%8A%E0%B9%87%E0%B8%AD%E0%B8%9B%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%A1%E0%B8%94%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%9A%E0%B8%B4%E0%B8%A7%E0%B8%95%E0%B8%B5%E0%B9%89%E0%B8%9E%E0%B8%A5%E0%B8%B2%E0%B8%8B%E0%B9%88%E0%B8%B2+121+Jant+Rd+Tambon+Nai+Mueang,+Mueang+Nakhon+Ratchasima+District+Nakhon+Ratchasima+30000/@14.9782908,102.087612,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x31194ca4b81e8aad:0x3b5d3e95ddf93832"
      target="_blank"
      style="text-decoration: none !important"
      id="tooltip-target-3"
    >
      <img class="mt-2" src="~/assets/map.png" alt="map" />
      <b-tooltip
        target="tooltip-target-3"
        triggers="hover"
        placement="left"
        variant="danger"
      >
        <h5>แผนที่ร้าน</h5>
      </b-tooltip>
    </a>
    <a
      href="/contact"
      target="_blank"
      style="text-decoration: none !important"
      id="tooltip-target-4"
    >
      <img class="mt-2" src="~/assets/contact.png" alt="contact" />
      <b-tooltip
        target="tooltip-target-4"
        triggers="hover"
        placement="left"
        variant="warning"
      >
        <h5>ติดต่อเรา</h5>
      </b-tooltip>
    </a>
  </div>
</template>

<style>
a {
  font-family: "Kanit";
}
</style>