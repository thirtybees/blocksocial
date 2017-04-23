(function() {
  window.blocksocial = {
    clickHandler: function (e) {
      e.preventDefault();
      $elem = $(e.target);
      var id = $elem.attr('id');
      var depth = 0;
      do {
        id = $elem.parent().attr('id');
        depth += 1;
      } while (!id && depth < 10);

      var medium = '';

      switch (id) {
        case 'blocksocial_facebook':
          medium = 'Facebook';
          break;
        case 'blocksocial_twitter':
          medium = 'Twitter';
          break;
        case 'blocksocial_rss':
          medium = 'RSS';
          break;
        case 'blocksocial_youtube':
          medium = 'YouTube';
          break;
        case 'blocksocial_pinterest':
          medium = 'Pinterest';
          break;
        case 'blocksocial_vimeo':
          medium = 'Vimeo';
          break;
        case 'blocksocial_instagram':
          medium = 'Instagram';
          break;
        default:
          medium = '';
          break;
      }

      if (medium && typeof window.ga === 'function') {
        window.ga('send', 'social', medium, 'send');
      }

      return true;
    },
  };

  function initBlockSocial() {
    if (typeof $ === 'undefined') {
      setTimeout(initBlockSocial, 100);

      return;
    }
    $(document).ready(function () {
      $('#blocksocial_facebook').on('click', window.blocksocial.clickHandler);
      $('#blocksocial_twitter').on('click', window.blocksocial.clickHandler);
      $('#blocksocial_rss').on('click', window.blocksocial.clickHandler);
      $('#blocksocial_youtube').on('click', window.blocksocial.clickHandler);
      $('#blocksocial_pinterest').on('click', window.blocksocial.clickHandler);
      $('#blocksocial_vimeo').on('click', window.blocksocial.clickHandler);
      $('#blocksocial_instagram').on('click', window.blocksocial.clickHandler);
    });
  }

  initBlockSocial();
}());
