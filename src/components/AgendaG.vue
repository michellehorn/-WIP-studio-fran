<template>
  <div>
    <iframe
      src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23F6BF26&amp;ctz=America%2FAraguaina&amp;src=bWljaGVsbGUuaG9ybjkzQGdtYWlsLmNvbQ&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=Y2xhc3Nyb29tMTA1MDU2NTI3ODQ3Njg2MDUyNDg2QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=cHQuYnJhemlsaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23039BE5&amp;color=%23795548&amp;color=%23004c50&amp;color=%23009688&amp;showNav=1&amp;showPrint=0&amp;showCalendars=0&amp;mode=WEEK&amp;showTabs=0&amp;showTz=0&amp;showDate=1"
      style="border-width:0"
      width="100%"
      height="350px"
      frameborder="0"
      scrolling="no"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "AgendaG"
};
</script>

<style lang="scss">
iframe {
  overflow-x: scroll;
}
</style>
