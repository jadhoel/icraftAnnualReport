/*
// 
// Functions
//Folder: public/js/function-print.js
*/
var moduleMarkup =
  '<div class="modules">' +
  '<div>' +
  '<a href="#" data-add-component="paragraph"><i class="fa fa-paragraph"></i><span>Text</span></a>' +
  '<a href="#" data-add-component="image"><i class="fa fa-image"></i><span>Image</span></a>' +
  '<a href="#" data-add-component="quote"><i class="fa fa-quote-left"></i><span>Quote</span></a>' +
  '<a href="#" data-add-component="table"><i class="fa fa-table"></i><span>Table</span></a>' +
  '<a href="#" data-add-component="video"><i class="fa fa-video"></i><span>Video</span></a>' +
  '<a href="#" data-add-component="audio"><i class="fa fa-volume-up"></i><span>Audio</span></a>' +
  '<a href="#" data-add-component="footnote"><i class="fa fa-asterisk"></i><span>Footnote</span></a>' +
  '<a href="#" data-add-component="number"><i class="fa fa-percent"></i><span>Number</span></a>' +
  '<a href="#" data-add-component="chart"><i class="fa fa-chart-pie"></i><span>Chart</span></a>' +
  '<a href="#" data-add-component="social"><i class="fa fa-comment-alt"></i><span>Social</span></a>' +
  '</div>' +
  '</div>'

var layoutsMarkup =
  '<div class="layouts">' +
  '<ul>' +
  '<li><a href="#" class="active" data-block-type="contentBlocks">Content</a></li>' +
  '<li><a href="#" data-block-type="layoutBlocks">Layouts</a></li>' +
  '</ul>' +
  '<div class="contentBlocks active">' +
  '<a href="#" data-add-component="paragraph"><i class="fa fa-pen-alt"></i><span>Text</span></a>' +
  '<a href="#" data-add-component="image"><i class="fa fa-image"></i><span>Image</span></a>' +
  '<a href="#" data-add-component="quote"><i class="fa fa-quote-left"></i><span>Quote</span></a>' +
  '<a href="#" data-add-component="table"><i class="fa fa-table"></i><span>Table</span></a>' +
  '<a href="#" data-add-component="video"><i class="fa fa-video"></i><span>Video</span></a>' +
  '<a href="#" data-add-component="audio"><i class="fa fa-volume-up"></i><span>Audio</span></a>' +
  '<a href="#" data-add-component="footnote"><i class="fa fa-asterisk"></i><span>Footnote</span></a>' +
  '<a href="#" data-add-component="number"><i class="fa fa-percent"></i><span>Number</span></a>' +
  '<a href="#" data-add-component="chart"><i class="fa fa-chart-pie"></i><span>Chart</span></a>' +
  '<a href="#" data-add-component="social"><i class="fa fa-comment-alt"></i><span>Social</span></a>' +
  '<a href="#" data-add-component="impactStory">   <i class="fa fa-book-open"></i> <span>Letter/Story</span> </a>' +
  '<a href="#" data-add-component="donorList"> <i class="fa fa-user-friends"></i> <span>Donor List</span> </a>' +
  '<a href="#" data-add-component="donate"> <i class="fa fa-heart"></i> <span>Donate</span> </a>' +
  '<a href="#" data-add-component="sponsors"> <i class="fa fa-hand-holding-heart"></i> <span>Sponsors</span> </a>' +
  '<a href="#" data-add-component="staff"> <i class="fa fa-users"></i> <span>Staff</span> </a>' +
  '<a href="#" data-add-component="survey"> <i class="fa fa-poll-h"></i> <span>Poll</span> </a>' +
  '<a href="#" data-add-component="html"> <i class="fa fa-code"></i> <span>HTML</span> </a>' +
  '</div>' +
  '<div class="layoutBlocks">' +
  '<a href="#" data-add-layout="2"> <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 280 220" style="enable-background:new 0 0 280 220;" xml:space="preserve"> <path d="M254.7,44h-230c-6.1,0-11,4.9-11,11v110c0,6.1,4.9,11,11,11h230c6.1,0,11-4.9,11-11V55C265.7,48.9,260.7,44,254.7,44z M25.7,56h107v108h-107V56z M253.7,164h-109V56h109V164z"/> </svg> <span>Layout A</span> </a>' +
  '<a href="#" data-add-layout="3"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 280 220" style="enable-background:new 0 0 280 220;" xml:space="preserve"> <path d="M255,64H25c-6.1,0-11,4.9-11,11v70c0,6.1,4.9,11,11,11h230c6.1,0,11-4.9,11-11V75C266,68.9,261.1,64,255,64z M174,76v68h-69 V76H174z M26,76h67v68H26V76z M254,144h-68V76h68V144z"/> </svg> <span>Layout B</span> </a>' +
  '<a href="#" data-add-layout="4"> <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 280 220" style="enable-background:new 0 0 280 220;" xml:space="preserve"> <path d="M254,74H24c-6.1,0-11,4.9-11,11v51c0,6.1,4.9,11,11,11h230c6.1,0,11-4.9,11-11V85C265,78.9,260.1,74,254,74z M145,86h48v49 h-48V86z M133,135H85V86h48V135z M25,86h48v49H25V86z M253,135h-48V86h48V135z"/> </svg> <span>Layout C</span> </a>' +
  '<a href="#" data-add-layout="1-4"> <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 280 220" style="enable-background:new 0 0 280 220;" xml:space="preserve"> <path d="M255,44H25c-6.1,0-11,4.9-11,11v110c0,6.1,4.9,11,11,11h230c6.1,0,11-4.9,11-11V55C266,48.9,261.1,44,255,44z M254,105 h-47.7V56H254V105z M145,117h49.3v47H145V117z M145,105V56h49.3v49H145z M26,56h107v108H26V56z M206.3,164v-47H254v47H206.3z"/> </svg> <span>Layout D</span> </a>' +
  '<a href="#" data-add-layout="1-1"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 280 220" style="enable-background:new 0 0 280 220;" xml:space="preserve"> <path d="M254.9,14.7h-230c-6.1,0-11,4.9-11,11v170c0,6.1,4.9,11,11,11h230c6.1,0,11-4.9,11-11v-170C265.9,19.6,261,14.7,254.9,14.7z M25.9,26.7h108v168h-108C25.9,194.7,25.9,26.7,25.9,26.7z M253.9,194.7h-108v-168h108V194.7z"/> </svg> <span>Layout E</span> </a>' +
  '<a href="#" data-add-layout="1-2"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 280 220" style="enable-background:new 0 0 280 220;" xml:space="preserve"> <path d="M254.9,14.7h-230c-6.1,0-11,4.9-11,11v170c0,6.1,4.9,11,11,11h230c6.1,0,11-4.9,11-11v-170C265.9,19.6,261,14.7,254.9,14.7z M253.9,104.7h-108v-78h108V104.7z M25.9,26.7h108v168h-108C25.9,194.7,25.9,26.7,25.9,26.7z M145.9,194.7v-78h108v78H145.9z"/> </svg> <span>Layout F</span> </a>' +
  '<a href="#" data-add-layout="2-2"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 280 220" style="enable-background:new 0 0 280 220;" xml:space="preserve"> <path d="M254.9,14.7h-230c-6.1,0-11,4.9-11,11v170c0,6.1,4.9,11,11,11h230c6.1,0,11-4.9,11-11v-170C265.9,19.6,261,14.7,254.9,14.7z M253.9,104.7h-108v-78h108V104.7z M133.9,26.7v78h-108v-78C25.9,26.7,133.9,26.7,133.9,26.7z M25.9,116.7h108v78h-108 C25.9,194.7,25.9,116.7,25.9,116.7z M145.9,194.7v-78h108v78H145.9z"/> </svg> <span>Layout G</span> </a>' +
  '<a href="#" data-add-layout="1-6"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 280 220" style="enable-background:new 0 0 280 220;" xml:space="preserve"> <path d="M254.9,14.7h-230c-6.1,0-11,4.9-11,11v170c0,6.1,4.9,11,11,11h230c6.1,0,11-4.9,11-11v-170C265.9,19.6,261,14.7,254.9,14.7z M253.9,74.7h-48v-48h48V74.7z M145.9,26.7h48v48h-48V26.7z M145.9,146.7h48v48h-48V146.7z M145.9,134.7v-48h48v48H145.9z M205.9,86.7h48v48h-48V86.7z M25.9,26.7h108v168h-108C25.9,194.7,25.9,26.7,25.9,26.7z M205.9,194.7v-48h48v48H205.9z"/> </svg> <span>Layout H</span> </a>' +
  '<a href="#" data-add-layout="2-6"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 280 220" style="enable-background:new 0 0 280 220;" xml:space="preserve"> <path d="M254.9,14.7h-230c-6.1,0-11,4.9-11,11v170c0,6.1,4.9,11,11,11h230c6.1,0,11-4.9,11-11v-170C265.9,19.6,261,14.7,254.9,14.7z M253.9,74.7h-48v-48h48V74.7z M145.9,26.7h48v48h-48V26.7z M145.9,146.7h48v48h-48V146.7z M145.9,134.7v-48h48v48H145.9z M205.9,86.7h48v48h-48V86.7z M133.9,26.7v78h-108v-78C25.9,26.7,133.9,26.7,133.9,26.7z M25.9,116.7h108v78h-108 C25.9,194.7,25.9,116.7,25.9,116.7z M205.9,194.7v-48h48v48H205.9z"/> </svg> <span>Layout I</span> </a>' +
  '<a href="#" data-add-layout="6-6"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 280 220" style="enable-background:new 0 0 280 220;" xml:space="preserve"> <path d="M254.9,14.7h-230c-6.1,0-11,4.9-11,11v170c0,6.1,4.9,11,11,11h230c6.1,0,11-4.9,11-11v-170C265.9,19.6,261,14.7,254.9,14.7z M253.9,74.7h-48v-48h48V74.7z M85.9,86.7h48v48h-48C85.9,134.7,85.9,86.7,85.9,86.7z M73.9,134.7h-48v-48h48V134.7z M133.9,74.7 h-48v-48h48V74.7z M145.9,26.7h48v48h-48V26.7z M133.9,146.7v48h-48v-48H133.9z M145.9,146.7h48v48h-48V146.7z M145.9,134.7v-48h48 v48H145.9z M205.9,86.7h48v48h-48V86.7z M73.9,26.7v48h-48v-48C25.9,26.7,73.9,26.7,73.9,26.7z M25.9,146.7h48v48h-48 C25.9,194.7,25.9,146.7,25.9,146.7z M205.9,194.7v-48h48v48H205.9z"/> </svg> <span>Layout J</span> </a>' +
  '</div>' +
  '</div>'

/////////////////////////
//  General Functions  //
/////////////////////////

function updateTheme() {
  var themeName = $('#reportDetails').attr('data-theme')
  var themePrimaryColor = $('#reportDetails').attr('data-primary-color')
  var themeSecondaryColor = $('#reportDetails').attr('data-secondary-color')
  var themePrimaryFont = $('#reportDetails').attr('data-primary-font')
  var themeSecondaryFont = $('#reportDetails').attr('data-secondary-font')

  // Color Picker UI
  $('[data-field="data-primary-color"] input').val(themePrimaryColor)
  $('[data-field="data-secondary-color"] input').val(themeSecondaryColor)

  $('[data-field="data-primary-color"]').css({ background: '#' + themePrimaryColor })
  $('[data-field="data-secondary-color"]').css({ background: '#' + themeSecondaryColor })

  // Color Font UI
  $('[data-field="data-primary-font"] option[value="' + themePrimaryFont + '"]').attr(
    'selected',
    true,
  )
  $('[data-field="data-secondary-font"] option[value="' + themeSecondaryFont + '"]').attr(
    'selected',
    true,
  )
}

function loadCharts() {
  $('canvas').each(function () {
    var chartID = $(this).attr('id')
    displayChart(chartID)
  })

  $('[data-chart-id]').each(function () {
    var chartID = $(this).attr('data-chart-id')
    var chartType = $(this).attr('data-chart-type')
    var prefix = $(this).attr('data-value-prefix')
    var suffix = $(this).attr('data-value-suffix')
    var labels = []
    var data = []
    var colors = []

    $(this)
      .find('.legend li')
      .each(function () {
        // JSUT CHANGED
        labels.push($(this).find('[data-field="label"]').text())
        data.push($(this).find('[data-field="data"]').text().replace(/,/g, ''))
        colors.push($(this).find('[data-field="color"]').attr('data-color'))
        let htm = $(this).html()
        htm = htm.replace(/[<]br[^>]*[>]/gi, '')
        if ($(this).text().length > 60) {
          $(this).html(htm).css('height', '85px').css('display', 'block')
        } else {
          $(this).html(htm)
        }
      })

    // set chart details
    $(this).find('option').attr('selected', false)
    $(this)
      .find('option[value="' + chartType + '"]')
      .attr('selected', true)
    $(this).find('.prefix').text(prefix)
    $(this).find('.suffix').text(suffix)
    $(this).find('[data-field="prefix"]').val(prefix)
    $(this).find('[data-field="suffix"]').val(suffix)

    setupChart(chartID, chartType, labels, data, colors, prefix, suffix)
  })
}

function getDonateBuilder() {
  var markup =
    '<div class="modalContainer donateContainer">' +
    '<a href="#" data-action="closeModal"><i class="fa fa-times"></i></a>' +
    '<h3>Add Donation URL</h3>' +
    '<div>' +
    '<input type="url" placeholder="Enter donation URL..." data-field="donateURL" name="donateURL" />' +
    '<button>Add Donation Link to Report</button>' +
    '</div>' +
    '</div>'
  $('#modal').html(markup)
}

function getHtmlBuilder(options) {
  if (!options) {
    var elementID = 'html_' + Math.random().toString(36).substr(2, 9)
    var markup =
      '<div class="modalContainer htmlContainer">' +
      '<a href="#" data-action="closeModal"><i class="fa fa-times"></i></a>' +
      '<h3>Add HTML & CSS</h3>' +
      '<div>' +
      '<div class="codeEditor">' +
      '<textarea placeholder="Enter HTML..." data-field="html" name="html"></textarea>' +
      '<textarea placeholder="Enter CSS..." data-field="css" name="css"></textarea>' +
      '<input type="hidden" data-field="id" value="' +
      elementID +
      '">' +
      '</div>' +
      '<p class="note">Note: When adding styles, use the <strong>#' +
      elementID +
      '</strong> selector to scope styles to this content block.</p>' +
      '<button>Add to Report</button>' +
      '</div>' +
      '</div>'
  } else {
    var markup =
      '<div class="modalContainer htmlContainer">' +
      '<a href="#" data-action="closeModal"><i class="fa fa-times"></i></a>' +
      '<h3>Add HTML & CSS</h3>' +
      '<div>' +
      '<div class="codeEditor">' +
      '<textarea placeholder="Enter HTML..." data-field="html" name="html">' +
      options.html +
      '</textarea>' +
      '<textarea placeholder="Enter CSS..." data-field="css" name="css">' +
      options.css +
      '</textarea>' +
      '<input type="hidden" data-field="id" value="' +
      options.id +
      '">' +
      '</div>' +
      '<p class="note">Note: When adding styles, use the <strong>#' +
      options.id +
      '</strong> selector to scope styles to this content block.</p>' +
      '<button class="update">Update</button>' +
      '</div>' +
      '</div>'
  }
  $('#modal').html(markup)
}

function getSocialBuilder() {
  var markup =
    '<div class="modalContainer socialContainer">' +
    '<a href="#" data-action="closeModal"><i class="fa fa-times"></i></a>' +
    '<h3>Add Social Widgets</h3>' +
    '<div>' +
    '<div class="instructions">' +
    '<p>Use the text box to embed social content on your report. Not sure how? Here are few links to get you going.</p><br>' +
    '<a href="https://help.twitter.com/en/using-twitter/how-to-embed-a-tweet" target="_blank">Embedding Tweets</a>' +
    '<a href="https://www.facebook.com/help/692720347411816" target="_blank">Embedding Facebook Posts</a>' +
    '<a href="https://www.instagram.com/developer/embedding/" target="_blank">Embedding Instagram Posts</a>' +
    '</div>' +
    '<div class="embed">' +
    '<textarea placeholder="Enter embed codes..." data-field="socialEmbed" name="socialEmbed"></textarea>' +
    '<button>Add to Report</button>' +
    '</div>' +
    '</div>' +
    '</div>'
  $('#modal').html(markup)
}

function getVideoBuilder() {
  var markup =
    '<div class="modalContainer videoContainer">' +
    '<a href="#" data-action="closeModal"><i class="fa fa-times"></i></a>' +
    '<h3>Add Video URL</h3>' +
    '<div>' +
    '<textarea type="url" placeholder="Enter video embed code" data-field="videoURL" name="videoURL"></textarea>' +
    '<button>Add Video to Report</button>' +
    '</div>' +
    '</div>'
  $('#modal').html(markup)
}

function getChartBuilder() {
  var markup =
    '<div class="modalContainer chartContainer">' +
    '<a href="#" data-action="closeModal"><i class="fa fa-times"></i></a>' +
    '<h3>Configure Chart</h3>' +
    '<div>' +
    '<div class="chart">' +
    '<div>' +
    '<h3>Untitled</h3>' +
    '<canvas id="chart"></canvas>' +
    '</div>' +
    '</div>' +
    '<div class="chartBuilder">' +
    '<div class="chartTitle">' +
    '<label>Chart Title</label>' +
    '<input type="text" Value="Untitled" data-field="chartTitle"/>' +
    '</div>' +
    '<div class="chartStyle">' +
    '<label>Chart Style</label>' +
    '<select data-field="chartStyle">' +
    '<option value="#000,#000,#000,#000,#000,#000,#000,#000,#000,#000,#000,#000," selected disabled>Choose Style</option>' +
    '<option value="#0A4558,#278A72,#40AE8B,#DEDB82,#EA6A1E,#0A4558,#278A72,#40AE8B,#DEDB82,#EA6A1E">Style 1</option>' +
    '<option value="#732F3F,#EF6C42,#F5C85D,#A1B263,#A1B263,#732F3F,#EF6C42,#F5C85D,#A1B263,#A1B263">Style 2</option>' +
    '<option value="#192E78,#00AEEF,#086788,#F7BE18,#E04A1B,#192E78,#00AEEF,#086788,#F7BE18,#E04A1B">Style 3</option>' +
    '<option value="#75DDDD,#84C7D0,#9297C4,#9368B7,#903E98,#75DDDD,#84C7D0,#9297C4,#9368B7,#903E98">Style 4</option>' +
    '</select>' +
    '</div>' +
    '<div class="chartType">' +
    '<label>Chart Type</label>' +
    '<select data-field="chartType">' +
    '<option value="bar">Bar Chart</option>' +
    '<option value="line">Line Chart</option>' +
    '<option value="pie">Pie Chart</option>' +
    '</select>' +
    '</div>' +
    '<div class="chartData" style="overflow: auto; height: 13rem;">' +
    '<label>Chart Data</label>' +
    '<div class="chartDataFields">' +
    '<div class="chartDataItem"><input type="text" value="Label A" placeholder="Enter Label" data-field="segmentLabel"/><input type="text" value="10" placeholder="Enter Value" data-field="segmentValue"/></div>' +
    '<div class="chartDataItem"><input type="text" value="Label B" placeholder="Enter Label" data-field="segmentLabel"/><input type="text" value="20" placeholder="Enter Value" data-field="segmentValue"/></div>' +
    '<div class="chartDataItem"><input type="text" value="Label C" placeholder="Enter Label" data-field="segmentLabel"/><input type="text" value="30" placeholder="Enter Value" data-field="segmentValue"/></div>' +
    '</div>' +
    '<a href="#" data-action="addSegment">+ Add Another Segment</a>' +
    '</div>' +
    '<div>' +
    '<button>Add Chart to Report</button>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>'
  $('#modal').html(markup)

  var primaryColor = $('#reportDetails').attr('data-primary-color')
  var secondaryColor = $('#reportDetails').attr('data-secondary-color')
  var numColors = $('.chartDataItem').length
  var chartColorArray = $('[data-field="chartStyle"] option:selected').val().split(',')
  var ctx = document.getElementById('chart').getContext('2d')
  var chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Label A', 'Label B', 'Label C'],
      datasets: [
        {
          label: 'Number of Votes',
          data: [10, 20, 30],
          backgroundColor: chartColorArray,
          borderWidth: 1,
        },
      ],
    },
    plugins: [ChartDataLabels],
    options: {
      plugins: {
        datalabels: {
          color: '#ffffff',
          size: 12,
        },
      },
      legend: {
        display: false,
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  })
}

function updateChart(chartID, chartType) {
  var prefix = $('[data-chart-id="' + chartID + '"] [data-field="prefix"]').val()
  var suffix = $('[data-chart-id="' + chartID + '"] [data-field="suffix"]').val()
  var labels = []
  var data = []
  var colors = []

  $('[data-chart-id="' + chartID + '"] .legend li').each(function () {
    labels.push($(this).find('[data-field="label"]').text())
    data.push($(this).find('[data-field="data"]').text().replace(/,/g, ''))
    colors.push($(this).find('[data-field="color"]').attr('data-color'))
  })

  // Set prefix and suffix
  $('[data-chart-id="' + chartID + '"] .legend .prefix').text(prefix)
  $('[data-chart-id="' + chartID + '"] .legend .suffix').text(suffix)

  // Set component values
  $('[data-chart-id="' + chartID + '"]').attr('data-chart-type', chartType)
  $('[data-chart-id="' + chartID + '"]').attr('data-value-prefix', prefix)
  $('[data-chart-id="' + chartID + '"]').attr('data-value-suffix', suffix)

  setupChart(chartID, chartType, labels, data, colors, prefix, suffix)

  // //  Canvas
  // $('.chart').html('<div><h3>Title</h3><canvas id="chart"></canvas></div>');

  // var chartType  = $('[data-field="chartType"] option:selected').val();
  // var chartTitle = $('[data-field="chartTitle"]').val();
  // var chartLabels = [];
  // var chartData   = [];
  // var primaryColor    = $('#reportDetails').attr('data-primary-color');
  // var secondaryColor  = $('#reportDetails').attr('data-secondary-color');;
  // var numColors = $('.chartDataItem').length;
  // //var chartColorArray = chroma.scale([primaryColor,secondaryColor]).mode('lch').colors(numColors);
  // var chartColorArray = $('[data-field="chartStyle"] option:selected').val().split(',');
  // $('.chartDataItem').each( function(){
  //     var segmentLabel = $(this).find('[data-field="segmentLabel"]').val();
  //     var segmentValue = $(this).find('[data-field="segmentValue"]').val();
  //     chartLabels.push( segmentLabel );
  //     chartData.push( segmentValue );
  // });

  // var ctx = document.getElementById("chart").getContext('2d');

  // if( chartType == 'pie'){
  //     $('.chart h3').text(chartTitle);
  //     var chartOptions = {
  //         type: chartType,
  //         data: {
  //             labels: chartLabels,
  //             datasets: [{
  //                 data: chartData,
  //                 backgroundColor: chartColorArray
  //             }]
  //         },
  //         options: {
  //             legend:{
  //                 display: false
  //             },
  //             tooltips: {
  //                 callbacks: {
  //                     title: function(tooltipItem, data) {
  //                          return data['labels'][tooltipItem[0]['index']];
  //                       },
  //                       label: function(tooltipItem, data) {
  //                          return data['datasets'][0]['data'][tooltipItem['index']].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  //                       },
  //                       afterLabel: function(tooltipItem, data) {
  //                          var dataset = data['datasets'][0];
  //                          var percent = Math.round((dataset['data'][tooltipItem['index']] / dataset["_meta"][0]['total']) * 100)
  //                         //  return '(' + percent + '%)';
  //                       }
  //                 }
  //             },
  //             plugins: {
  //                 datalabels: {
  //                     color: "#ffffff"
  //                 }
  //             }
  //         }
  //     };
  //     var chart = new Chart( ctx, chartOptions );
  // }

  // if( chartType == 'bar'){
  //     $('.chart h3').text(chartTitle);
  //     var chartOptions = {
  //         type: chartType,
  //         data: {
  //             labels: chartLabels,
  //             datasets: [{
  //                 data: chartData,
  //                 backgroundColor: chartColorArray
  //             }]
  //         },
  //         options: {
  //             legend:{
  //                 display: false
  //             },
  //             scales: {
  //                 yAxes: [{
  //                     ticks: {
  //                         beginAtZero: true
  //                     }
  //                 }]
  //             }
  //         }
  //     };
  //     var chart = new Chart( ctx, chartOptions );
  // }

  // if( chartType == 'line'){
  //     $('.chart h3').text(chartTitle);
  //     var chartOptions = {
  //         type: chartType,
  //         data: {
  //             labels: chartLabels,
  //             datasets: [{
  //                 data: chartData,
  //                 backgroundColor: chartColorArray,
  //                 borderColor: chartColorArray,
  //                 borderWidth: 1
  //             }]
  //         },
  //         options: {
  //             legend:{
  //                 display: false
  //             },
  //             scales: {
  //                 yAxes: [{
  //                     ticks: {
  //                         beginAtZero:true
  //                     }
  //                 }]
  //             }
  //         }
  //     };
  //     var chart = new Chart( ctx, chartOptions );
  // }
}

function getChartData() {
  var chartType = $('[data-field="chartType"] option:selected').val()
  var chartLabels = []
  var chartData = []
  var primaryColor = $('#reportDetails').attr('data-primary-color')
  var secondaryColor = $('#reportDetails').attr('data-secondary-color')
  var numColors = $('.chartDataItem').length
  // var chartColorArray = chroma.scale([primaryColor,secondaryColor]).mode('lch').colors(numColors);
  var chartColorArray = $('[data-field="chartStyle"] option:selected').val().split(',')

  $('.chartDataItem').each(function () {
    var segmentLabel = $(this).find('[data-field="segmentLabel"]').val()
    var segmentValue = $(this).find('[data-field="segmentValue"]').val()
    chartLabels.push(segmentLabel)
    chartData.push(segmentValue)
  })

  if (chartType == 'pie') {
    var chartOptions = {
      type: chartType,
      data: {
        labels: chartLabels,
        datasets: [
          {
            data: chartData,
            backgroundColor: chartColorArray,
            borderWidth: 1,
          },
        ],
      },
      plugins: [ChartDataLabels],
      options: {
        plugins: {
          datalabels: {
            color: '#ffffff',
            size: 12,
          },
          legend: {
            display: false,
          },
          tooltips: {
            callbacks: {
              title: function (context) {
                return context.label
              },
              label: function (context) {
                // var dataset = data['datasets'][0];
                // var percent = Math.round((dataset['data'][tooltipItem['index']] / dataset["_meta"][0]['total']) * 100)
                // return prefix+data['datasets'][0]['data'][tooltipItem['index']].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' '+suffix+' (' + percent + '%)';
                return (
                  prefix +
                  context.parsed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
                  ' ' +
                  suffix
                )
              },
              afterLabel: function (tooltipItem, data) {
                //return 'After Label';
              },
            },
          },
        },
      },
    }
  }

  if (chartType == 'bar') {
    var chartOptions = {
      type: chartType,
      data: {
        labels: chartLabels,
        datasets: [
          {
            data: chartData,
            backgroundColor: chartColorArray,
            borderWidth: 1,
          },
        ],
      },
      plugins: [ChartDataLabels],
      options: {
        legend: {
          display: false,
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    }
  }

  if (chartType == 'line') {
    var chartOptions = {
      type: chartType,
      data: {
        labels: chartLabels,
        datasets: [
          {
            data: chartData,
            backgroundColor: chartColorArray,
            borderColor: chartColorArray,
            borderWidth: 1,
          },
        ],
      },
      plugins: [ChartDataLabels],
      options: {
        legend: {
          display: false,
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    }
  }
  return chartOptions
}

function displayChart(chartID) {
  // console.log( chartID );
  // var chartOptions = $('#'+chartID).attr('data-chartOptions');
  // var chartTitle   = $('#'+chartID).attr('data-chartTitle');
  // var ctx = document.getElementById( chartID ).getContext('2d');
  // var chart = new Chart( ctx, JSON.parse(chartOptions) );
}

function uploadBGImage(element, component) {
  var file = document.querySelector('input[accept="image/*"]').files[0]
  var reader = new FileReader()
  reader.addEventListener(
    'load',
    function () {
      var imageDataURI = reader.result
      $('.mediaContainer img').attr('src', imageDataURI)
      $('#modalMedia, #overlay').addClass('active')
      //storeImage( imageDataURI, element, component );
      // TODO: Create a loader here
    },
    false,
  )
  if (file) {
    reader.readAsDataURL(file)
    $('input[accept="image/*"]').val('')
  }
}

function uploadAvatar() {
  var file = document.querySelector('input[accept="image/*"]').files[0]
  var reader = new FileReader()
  reader.addEventListener(
    'load',
    function () {
      var imageDataURI = reader.result
      $('.mediaContainer img').attr('src', imageDataURI)
      $('#modalMedia, #overlay').addClass('active')
    },
    false,
  )
  if (file) {
    reader.readAsDataURL(file)
    $('input[accept="image/*"]').val('')
  }
}

function storeAvatarBlob(imageDataURI) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var userID = user.uid
      var imageFileName = 'img_' + Math.random().toString(36).substr(2, 9) + '.jpg'
      var storageRef = firebase.storage().ref()
      var ref = storageRef.child(imageFileName)
      var imagesRef = storageRef.child('images/' + userID + '/' + imageFileName)
      imagesRef.put(imageDataURI).then(function (snapshot) {
        imagesRef
          .getDownloadURL()
          .then(function (url) {
            console.log('urlx1', url)
            firebase
              .database()
              .ref('accounts/' + user.uid)
              .update({
                organizationLogo: url,
              })
            avaterBlobHeroku(imageDataURI)
            $('[data-view="dashboard"] header .img > div:nth-of-type(1)').css({
              background: '#fff url("' + url + '") no-repeat center center / cover',
            })
          })
          .catch(function (error) {
            console.error(error)
          })
      })
    }
  })
}
function avaterBlobHeroku(url) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      user
        .getIdToken(true)
        .then((idToken) => {
          const urllogo =
            'https://yearly-api-prod.herokuapp.com/api/v1/accounts/' + user.uid + '/logo'

          var data = {
            logo: url,
          }

          var bodyFormData = new FormData()
          bodyFormData.append('logo', url)

          axios
            .put(urllogo, bodyFormData, {
              headers: { Authorization: idToken, 'Content-Type': 'multipart/form-data' },
            })
            .then((json) => {
              //console.log('data from ajaxinsertReport '+ json )
              if (json.status == 200) {
                //alert('upload ok, avatar update')

                $('#modalPublish, #overlay').addClass('active')
                $('#modalPublish .modalContainer h3').text('upload Avatar ok')
                var markup = '<div class="craftLink">' + '<p>Upload complete</p>' + '</div>'
                $('#modalPublish .reportLink').html(markup)
              }
            })
            .catch(function (error) {
              console.log('avatrBlob: ' + error)
              $('#modalPublish, #overlay').addClass('active')
              $('#modalPublish .modalContainer h3').text('File avatar upload')

              var markup =
                '<div class="craftLink">' + '' + '<p>Fail to upload picture, </p>' + '</div>'
              $('#modalPublish .reportLink').html(markup)
            })
        })
        .catch(function (error) {
          console.log('avatrBlob: ' + error)
          //alert(JSON.stringify(error))
        })
    }
  })
}
function storeAvatar(imageDataURI) {
  $('#modalMedia, #overlay').removeClass('active')
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var userID = user.uid
      var imageFileName = 'img_' + Math.random().toString(36).substr(2, 9) + '.jpg'
      var storageRef = firebase.storage().ref()
      var ref = storageRef.child(imageFileName)
      var imagesRef = storageRef.child('images/' + userID + '/' + imageFileName)
      imagesRef.putString(imageDataURI, 'data_url').then(function (snapshot) {
        imagesRef
          .getDownloadURL()
          .then(function (url) {
            console.log('urlx2', url)
            firebase
              .database()
              .ref('accounts/' + user.uid)
              .update({
                organizationLogo: url,
              })
            $('[data-view="dashboard"] header .img > div:nth-of-type(1)').css({
              background: '#fff url("' + url + '") no-repeat center center / cover',
            })
          })
          .catch(function (error) {
            console.error(error)
          })
      })
    }
  })
}

function storeImageBlob(blob, element, component) {
  element.append('<div class="loading"><div>Loading</div></div>')
  $('.modulesList').remove()
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var userID = user.uid
      var imageFileName = 'img_' + Math.random().toString(36).substr(2, 9) + '.jpg'

      // Create a root reference
      var storageRef = firebase.storage().ref()

      // Create a reference to 'mountains.jpg'
      var ref = storageRef.child(imageFileName)

      // Create a reference to 'images/mountains.jpg'
      var imagesRef = storageRef.child('images/' + userID + '/' + imageFileName)

      // Blob
      imagesRef.put(blob).then(function (snapshot) {
        console.log('Uploaded a blob or file!')
        // TODO: Stop the loader here.
        $('.loading').remove()
        // Download image and insert into markup
        imagesRef
          .getDownloadURL()
          .then(function (url) {
            if (component == 'image-bg') {
              element.append(
                '<section data-component="image-bg" data-controls="move,remove,addImage,textToggle,styleEditor,editImage" style="background: url(' +
                  url +
                  ') no-repeat center center / cover;"><div class="textOverlay"><div class="opacitySlider"><div data-opacity="50" data-action="changeOpacity"></div><span class="val">50%</span></div><div contenteditable>Enter text...</div></div></div>',
              )
            } else {
              var componentType = component.attr('data-component')
              if (componentType == 'gallery') {
                component.find('.img a[data-action="controlAddImage"]').remove()
                component
                  .find('.img')
                  .append(
                    '<div class="profile doka" data-mode="modal" data-center="0.5,0.5" data-utils="crop,filter,color,resize">' +
                      '<figcaption contenteditable>Enter Caption</figcaption>' +
                      '<a htef="#" data-action="move"><i class="fa fa-arrows-alt"></i></a>' +
                      '<a htef="#" data-action="remove"><i class="fa fa-times"></i></a>' +
                      '<a htef="#" data-action="edit"><i class="fa fa-pen"></i></a>' +
                      '<img src="' +
                      url +
                      '" data-src="' +
                      url +
                      '"/>' +
                      '</div>',
                  )
              } else if (componentType == 'image') {
                component.find('.img').remove()
                component.find('.sec-image').remove()
                component.find('.container').append(
                  '<img class="sec-image" src="' + url + '" />',
                  //'<img onclick="editImage(this.src)" class="sec-image" src="'+url+'" />'
                )
              } else if (componentType == 'sponsors') {
                component.find('.img a[data-action="controlAddImage"]').remove()
                component
                  .find('.img')
                  .append(
                    '<div data-sponsor-item>' +
                      '<img src="' +
                      url +
                      '" />' +
                      '<div class="controls-alt">' +
                      '<div><a htef="#" data-action="move"><i class="fa fa-arrows-alt"></i></a></div>' +
                      '<div><a htef="#" data-action="remove"><i class="fa fa-times"></i></a></div>' +
                      '</div>' +
                      '</div>',
                  )
              } else if (componentType == 'opening-cover') {
                element = element.prevObject[0].offsetParent.className
                if (element == 'img') {
                  component.find('.img img').remove()
                  component.find('.img').prepend('<img src="' + url + '" />')
                } else {
                  component.css({
                    background: 'url(' + url + ') no-repeat center center / cover',
                  })
                  $('[data-field="reportCover"]').val(url)
                }
              } else if (componentType == 'presidentsLetter') {
                // component.find('.img img').remove();
                // component.find('.img').prepend(
                //     '<img src="'+url+'" />'
                // );
                element.css({
                  background: 'url(' + url + ') no-repeat center center / cover',
                })
              } else if (componentType == 'staff') {
                element.css({
                  background: 'url(' + url + ') no-repeat center center / cover',
                })
              } else if (componentType == 'impactStory') {
                element.css({
                  background: 'url(' + url + ') no-repeat center center / cover',
                })
              } else if (componentType == 'donorList') {
                element.css({
                  background: 'url(' + url + ') no-repeat center center / cover',
                })
              } else {
                element = element.prevObject[0].offsetParent.className
                if (element == 'img') {
                  component.find('.img img').remove()
                  component.find('.img').prepend('<img src="' + url + '" />')
                } else {
                  component.css({
                    background: 'url(' + url + ') no-repeat center center / cover',
                  })
                }
              }
            }
            getControls()
            blurUpdate()

            //generateReportObject();
          })
          .catch(function (error) {
            console.error(error)
          })
      })
    }
  })
}

function storeImage(imageDataURI, element, component) {
  $('#modalMedia, #overlay').removeClass('active')
  element.append('<div class="loading"><div>Loading</div></div>')
  $('.modulesList').remove()
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var userID = user.uid
      var imageFileName = 'img_' + Math.random().toString(36).substr(2, 9) + '.jpg'

      // Create a root reference
      var storageRef = firebase.storage().ref()

      // Create a reference to 'mountains.jpg'
      var ref = storageRef.child(imageFileName)

      // Create a reference to 'images/mountains.jpg'
      var imagesRef = storageRef.child('images/' + userID + '/' + imageFileName)

      // Base64 formatted string
      imagesRef.putString(imageDataURI, 'data_url').then(function (snapshot) {
        // TODO: Stop the loader here.
        component.find('.loading').remove()
        // Download image and insert into markup
        imagesRef
          .getDownloadURL()
          .then(function (url) {
            var componentType = component.attr('data-component')
            if (componentType == 'gallery') {
              component.find('.img a[data-action="controlAddImage"]').remove()
              component
                .find('.img')
                .append(
                  '<div class="profile doka" data-mode="modal" data-center="0.5,0.5" data-utils="crop,filter,color,resize">' +
                    '<figcaption contenteditable>Enter Caption</figcaption><a htef="#" data-action="move"><i class="fa fa-arrows-alt"></i></a><a htef="#" data-action="remove"><i class="fa fa-times"></i></a>' +
                    '<img src="' +
                    url +
                    '" data-src="' +
                    url +
                    '"/>' +
                    '<button>edit</button>' +
                    '</div>',
                )
            } else if (componentType == 'image') {
              // component.find('.img').remove();
              // component.find('.container').append(
              //     '<img src="'+url+'" />'
              // );
              component.find('.img').append('<img src="' + url + '" />')
            } else if (componentType == 'sponsors') {
              component.find('.img a[data-action="controlAddImage"]').remove()
              component
                .find('.img')
                .append(
                  '<div><img src="' +
                    url +
                    '" /><a htef="#" data-action="move"><i class="fa fa-arrows-alt"></i></a><a htef="#" data-action="remove"><i class="fa fa-times"></i></a></div>',
                )
            } else if (componentType == 'opening-cover') {
              element = element.prevObject[0].offsetParent.className
              if (element == 'img') {
                component.find('.img img').remove()
                component.find('.img').prepend('<img src="' + url + '" />')
              } else {
                component.css({
                  background: 'url(' + url + ') no-repeat center center / cover',
                })
                $('[data-field="reportCover"]').val(url)
              }
            } else if (componentType == 'presidentsLetter') {
              // component.find('.img img').remove();
              // component.find('.img').prepend(
              //     '<img src="'+url+'" />'
              // );
              element.css({
                background: 'url(' + url + ') no-repeat center center / cover',
              })
            } else if (componentType == 'staff') {
              element.css({
                background: 'url(' + url + ') no-repeat center center / cover',
              })
            } else if (componentType == 'impactStory') {
              element.css({
                background: 'url(' + url + ') no-repeat center center / cover',
              })
            } else if (componentType == 'donorList') {
              element.css({
                background: 'url(' + url + ') no-repeat center center / cover',
              })
            } else {
              element = element.prevObject[0].offsetParent.className
              if (element == 'img') {
                component.find('.img img').remove()
                component.find('.img').prepend('<img src="' + url + '" />')
              } else {
                component.css({
                  background: 'url(' + url + ') no-repeat center center / cover',
                })
              }
            }
            //generateReportObject();
          })
          .catch(function (error) {
            console.error(error)
          })
      })
    }
  })
}

function uploadAudio(element, component) {
  var file = document.querySelector('input[accept="audio/*"]').files[0]
  var reader = new FileReader()
  reader.addEventListener(
    'load',
    function () {
      var audioDataURI = reader.result
      storeAudio(audioDataURI, element, component)
      // TODO: Create a loader here
      element.append('<div class="loading"><div>Loading</div></div>')
    },
    false,
  )
  if (file) {
    reader.readAsDataURL(file)
    $('input[accept="audio/*"]').val('')
  }
}

function storeAudio(audioDataURI, element, component) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var userID = user.uid
      var audioFileName = 'audio_' + Math.random().toString(36).substr(2, 9) + '.mp3'

      // Create a root reference
      var storageRef = firebase.storage().ref()

      // Create a reference to 'mountains.jpg'
      var ref = storageRef.child(audioFileName)

      // Create a reference to 'images/mountains.jpg'
      var audioRef = storageRef.child('audio/' + userID + '/' + audioFileName)

      // Base64 formatted string
      audioRef.putString(audioDataURI, 'data_url').then(function (snapshot) {
        // TODO: Stop the loader here.
        component.find('.loading').remove()
        // Download image and insert into markup
        audioRef
          .getDownloadURL()
          .then(function (url) {
            component.find('a[data-action="controlAddAudio"]').remove()
            element
              .find('.container')
              .append(
                '<audio controls>' +
                  '<source src="' +
                  url +
                  '" type="audio/mpeg">' +
                  "Your device is doesn't support HTML audio." +
                  '</audio>',
              )
            //generateReportObject();
          })
          .catch(function (error) {
            console.error(error)
          })
      })
    }
  })
}

function getParam(name) {
  var url = window.location.href
  var name = name.replace(/[\[\]]/g, '\\$&')
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url)
  if (!results) return null
  if (!results[2]) return ''
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

function getPricing(billing) {
  if (billing == 'monthly') {
    var pricing = {
      essentials: 99.0,
      premium: 149.0,
      advanced: 229.0,
    }
  }

  if (billing == 'annually') {
    var pricing = {
      essentials: 1089.0,
      premium: 1639.0,
      advanced: 2519.0,
    }
  }

  $('.essentials .price span').html('<sup>$</sup>' + pricing.essentials)
  $('.premium .price span').html('<sup>$</sup>' + pricing.premium)
  $('.advanced .price span').html('<sup>$</sup>' + pricing.advanced)

  $('.essentials button').attr('data-price', pricing.essentials)
  $('.premium button').attr('data-price', pricing.premium)
  $('.advanced button').attr('data-price', pricing.advanced)
}

function setPackage(accPackage, accBilling, accPrice) {
  $('.sub p strong').text(accPackage)
  $('.sub p span').text('$' + accPrice + ' ' + 'billed ' + accBilling)
  $('button span').text(accPrice)
}

////////////////////////
//      Report Functions  //
////////////////////////

function getModuleList() {
  $('.pageContents').addClass('noflex') // TO REMOVE: updates reports with new 3.0 layout
  $('.layouts, .modules, #styleEditor').remove()
  $('article:not([data-page="contact"])').append(layoutsMarkup)
}

function getControls() {
  /*
        Loop through each report component.
        Get comma separated list of controls details from data attribute.
        Create control markup and append to component markup.
    */
  $('.controls, .pageControls, [data-action="removePage"]').remove()
  // $('[data-page]:not([data-page="opening"]):not([data-page="contact"])').each( function(){
  //     $(this).find('header').append('<a href="#" data-action="removePage"><i class="fa fa-trash"></i></a>');
  // });

  // $('[data-page]').each( function(key, val){
  //     $(this).find('header').append(
  //         '<div data-opacity="10" data-action="changeOpacity'+key+'"></div>'
  //     );
  //     var opacity = $( '[data-action="changeOpacity'+key+'"]' ).attr('data-opacity');
  //     $( '[data-action="changeOpacity'+key+'"]' ).slider({
  //         range: "min",
  //         value: opacity,
  //         min: 1,
  //         max: 100,
  //         slide: function( event, ui ) {
  //             $( '[data-action="changeOpacity'+key+'"]' ).attr('data-opacity', ui.value);
  //             console.log( ui.value );
  //         }
  //     });
  // });
  $('[data-component], .sectionLayout').each(function () {
    var controlMarkup = null
    var controlActions = []
    var component = $(this)

    if ($(this).attr('data-controls')) {
      var controlsDetails = $(this).attr('data-controls').split(',')
      $.each(controlsDetails, function (key, val) {
        if (val == 'uploadData') {
          actionName = 'controlFileUpload'
          actionIcon = 'upload' // fontawesome
          controlActions.push(
            '<div><a href="#" title="Style Editor" data-action="' +
              actionName +
              '">' +
              '<i class="fa fa-' +
              actionIcon +
              '"></i>' +
              '</a></div>',
          )
        }
        if (val == 'styleEditor') {
          actionName = 'controlStyleEditor'
          actionIcon = 'palette' // fontawesome
          controlActions.push(
            '<div><a href="#" title="Style Editor" data-action="' +
              actionName +
              '">' +
              '<i class="fa fa-' +
              actionIcon +
              '"></i>' +
              '</a></div>',
          )
        }
        if (val == 'editImage') {
          actionName = 'controlImageEdit'
          actionIcon = 'edit' // fontawesome
          controlActions.push(
            '<div><a href="#" title="Edit Image" data-action="' +
              actionName +
              '">' +
              '<i class="fa fa-' +
              actionIcon +
              '"></i>' +
              '</a></div>',
          )
        }
        if (val == 'code') {
          actionName = 'controlCode'
          actionIcon = 'code' // fontawesome
          controlActions.push(
            '<div><a href="#" title="Style Editor" data-action="' +
              actionName +
              '">' +
              '<i class="fa fa-' +
              actionIcon +
              '"></i>' +
              '</a></div>',
          )
        }
        if (val == 'clone') {
          actionName = 'controlClone'
          actionIcon = 'plus' // fontawesome
          controlActions.push(
            '<div><a href="#" title="Style Editor" data-action="' +
              actionName +
              '">' +
              '<i class="fa fa-' +
              actionIcon +
              '"></i>' +
              '</a></div>',
          )
        }
        if (val == 'flip') {
          actionName = 'flip'
          actionIcon = 'exchange-alt' // fontawesome
          controlActions.push(
            '<div><a href="#" title="Flip Layout" data-action="' +
              actionName +
              '">' +
              '<i class="fa fa-' +
              actionIcon +
              '"></i>' +
              '</a></div>',
          )
        }
        if (val == 'addRow') {
          actionName = 'controlAddRow'
          actionIcon = 'plus' // fontawesome
          controlActions.push(
            '<div><a href="#" title="Add New Row" data-action="' +
              actionName +
              '">' +
              '<i class="fa fa-' +
              actionIcon +
              '"></i>' +
              '</a></div>',
          )
        }
        if (val == 'background') {
          actionName = 'controlBackground'
          actionIcon = 'image' // fontawesome
          controlActions.push(
            '<div><a href="#" title="Add Background Image" data-action="' +
              actionName +
              '">' +
              '<i class="fa fa-' +
              actionIcon +
              '"></i>' +
              '</a></div>',
          )
        }
        if (val == 'visibility') {
          actionName = 'controlVisibility'
          actionIcon = 'eye' // fontawesome
          controlActions.push(
            '<div><a href="#" title="Hide Page" data-action="' +
              actionName +
              '">' +
              '<i class="fa fa-' +
              actionIcon +
              '"></i>' +
              '</a></div>',
          )
        }
        if (val == 'layoutToggle') {
          actionName = 'controlLayoutToggle'
          actionIcon = 'toggle-off' // fontawesome
          controlActions.push(
            '<div><a href="#" title="Toggle Layout" data-action="' +
              actionName +
              '">' +
              '<i class="fa fa-' +
              actionIcon +
              '"></i>' +
              '</a></div>',
          )
        }
        if (val == 'textToggle') {
          actionName = 'controlLayoutToggle'
          actionIcon = 'pen-alt' // fontawesome
          controlActions.push(
            '<div><a href="#" title="Toggle Text" data-action="' +
              actionName +
              '">' +
              '<i class="fa fa-' +
              actionIcon +
              '"></i>' +
              '</a></div>',
          )
        }
        if (val == 'addImage') {
          actionName = 'controlAddImage'
          actionIcon = 'image' // fontawesome
          controlActions.push(
            '<div><a href="#" title="Add New Image" data-action="' +
              actionName +
              '">' +
              '<i class="fa fa-' +
              actionIcon +
              '"></i>' +
              '</a></div>',
          )
        }
        if (val == 'add') {
          actionName = 'controlAdd'
          actionIcon = 'plus' // fontawesome
          controlActions.push(
            '<div><a href="#" title="Add New Item" data-action="' +
              actionName +
              '">' +
              '<i class="fa fa-' +
              actionIcon +
              '"></i>' +
              '</a></div>',
          )
        }
        if (val == 'addChart') {
          actionName = 'controlAddChart'
          actionIcon = 'plus' // fontawesome
          controlActions.push(
            '<div><a href="#" title="Add New Chart" data-action="' +
              actionName +
              '">' +
              '<i class="fa fa-' +
              actionIcon +
              '"></i>' +
              '</a></div>',
          )
        }
        if (val == 'move') {
          actionName = 'controlMove'
          actionIcon = 'arrows-alt' // fontawesome
          controlActions.push(
            '<div><a href="#" title="Move Content Block" data-action="' +
              actionName +
              '">' +
              '<i class="fa fa-' +
              actionIcon +
              '"></i>' +
              '</a></div>',
          )
        }
        if (val == 'remove') {
          actionName = 'controlRemove'
          actionIcon = 'trash' // fontawesome
          controlActions.push(
            '<div><a href="#" title="Remove Content Block" data-action="' +
              actionName +
              '">' +
              '<i class="fa fa-' +
              actionIcon +
              '"></i>' +
              '</a></div>',
          )
        }
        if (val == 'removePage') {
          actionName = 'removePage'
          actionIcon = 'trash' // fontawesome
          controlActions.push(
            '<div><a href="#" title="Remove Content Block" data-action="' +
              actionName +
              '">' +
              '<i class="fa fa-' +
              actionIcon +
              '"></i>' +
              '</a></div>',
          )
        }
        if (val == 'split') {
          actionName = 'controlSplit'
          actionIcon = 'columns' // fontawesome
          controlActions.push(
            '<div><a href="#" title="Place Content Block Side-by-Side" data-action="' +
              actionName +
              '">' +
              '<i class="fa fa-' +
              actionIcon +
              '"></i>' +
              '</a></div>',
          )
        }
        if (val == 'popup') {
          actionName = 'showPopup'
          actionIcon = 'edit' // fontawesome
          controlActions.push(
            '<div><a href="#" title="Edit Link" data-action="' +
              actionName +
              '">' +
              '<i class="fa fa-' +
              actionIcon +
              '"></i>' +
              '</a></div>',
          )
        }
      })
      var controlMarkup = '<div class="controls">' + controlActions.join('') + '</div>'
      component.append(controlMarkup)
    }
  })

  // //  Sliders
  // $( '[data-action="changeOpacity"]' ).slider({
  //     range: "min",
  //     value: 20,
  //     min: 1,
  //     max: 100,
  //     slide: function( event, ui ) {
  //         console.log( ui.value );
  //     }
  // });

  $('article header .opacitySlider').each(function () {
    var sliderParent = $(this)
    var slider = $(this).find('[data-action="changeOpacity"]')
    //slider.empty();
    var opacity = slider.attr('data-opacity')
    slider.slider({
      range: 'min',
      value: opacity,
      min: 1,
      max: 100,
      slide: function (event, ui) {
        var dec = ui.value / 100
        slider.attr('data-opacity', ui.value)
        sliderParent.find('.val').text(ui.value + '%')
        sliderParent.parents('header').css({
          'box-shadow': 'inset 0 300vh 0 0 rgba(0, 0, 0, ' + dec + ')',
        })
        console.log(ui.value)
      },
      change: function () {
        //generateReportObject( false );
        blurUpdate()
        newgetPageList()
        //getPageList();
      },
    })
  })

  $('.sizeSlider').each(function () {
    var sliderParent = $(this)
    var slider = $(this).find('[data-action="changeSize"]')
    //slider.empty();
    var size = slider.attr('data-size')
    slider.slider({
      range: 'min',
      value: size,
      min: 15,
      max: 30,
      slide: function (event, ui) {
        var dec = ui.value
        slider.attr('data-size', ui.value)
        sliderParent.find('.val').text(ui.value + '%')
        sliderParent.parents('.img').css({
          'max-width': dec + 'rem',
        })
        console.log(ui.value)
      },
      change: function () {
        //generateReportObject( false );
        blurUpdate()
      },
    })
  })

  $('[data-component="quote"] .opacitySlider, [data-component="survey"] .opacitySlider').each(
    function () {
      var sliderParent = $(this)
      var slider = $(this).find('[data-action="changeOpacity"]')
      //slider.empty();
      var opacity = slider.attr('data-opacity')
      slider.slider({
        range: 'min',
        value: opacity,
        min: 1,
        max: 100,
        slide: function (event, ui) {
          var dec = ui.value / 100
          slider.attr('data-opacity', ui.value)
          sliderParent.find('.val').text(ui.value + '%')
          sliderParent.parents('[data-component]').css({
            'box-shadow': 'inset 0 300vh 0 0 rgba(0, 0, 0, ' + dec + ')',
          })
          console.log(ui.value)
        },
        change: function () {
          //generateReportObject( false );
          blurUpdate()
          newgetPageList()
          //getPageList();
        },
      })
    },
  )

  $('[data-component="image"] .opacitySlider, [data-component="image-bg"] .opacitySlider').each(
    function () {
      var sliderParent = $(this)
      var slider = $(this).find('[data-action="changeOpacity"]')
      //slider.empty();
      var opacity = slider.attr('data-opacity')
      slider.slider({
        range: 'min',
        value: opacity,
        min: 1,
        max: 100,
        slide: function (event, ui) {
          var dec = ui.value / 100
          slider.attr('data-opacity', ui.value)
          sliderParent.find('.val').text(ui.value + '%')
          sliderParent.parents('.textOverlay').css({
            'box-shadow': 'inset 0 300vh 0 0 rgba(0, 0, 0, ' + dec + ')',
          })
          console.log(ui.value)
        },
        change: function () {
          //generateReportObject( false );
          blurUpdate()
          newgetPageList()
          //getPageList();
        },
      })
    },
  )

  //  Page Sorting

  $('[data-component="sponsors"] .img').sortable({
    handle: "[data-action='move']",
    placeholder: 'droppable-area',
    update: function (event, ui) {
      //generateReportObject();
      blurUpdate()
    },
  })

  $('[data-component="staff"] .container').sortable({
    handle: "[data-action='moveItem']",
    placeholder: 'droppable-area',
    update: function (event, ui) {
      //generateReportObject();
      blurUpdate()
    },
  })

  $('.pageContents').sortable({
    handle: "[data-action='controlMove']",
    placeholder: 'droppable-area',
    connectWith: '.pageContents',
    update: function (event, ui) {
      //generateReportObject();
      blurUpdate()
      $(ui.item).css({
        'z-index': '4',
      })
    },
  })

  $('[data-columns]').sortable({
    handle: "[data-action='controlMove']",
    items: '.slot',
    placeholder: 'droppable-area slot',
    update: function (event, ui) {
      //generateReportObject();
      blurUpdate()
    },
  })

  $('.slot').sortable({
    connectWith: '.slot, [data-columns]',
    items: '[data-component]',
    handle: "[data-action='controlMove']",
    start: function (event, ui) {
      var module = ui.item[0].attributes[1].value

      if (module == 'para') {
        $('.restricted').find('[data-action="addModule"]').html('<i class="fa fa-ban"></i>')
        $('.restricted').addClass('disabled')
      }
    },
    receive: function (event, ui) {
      var module = ui.item[0].attributes[1].value
      if ($(this).children().length > 2) {
        // $(this).find('[data-component]:nth-of-type(1)').css({
        //     'opacity' : '0.3'
        // });
        $(ui.sender).sortable('cancel')
      }

      if (module == 'para') {
        if ($(this).hasClass('restricted')) {
          $(ui.sender).sortable('cancel')
        }
      }
    },
    stop: function () {
      $('.restricted').find('[data-action="addModule"]').html('<i class="fa fa-plus"></i>')
      $('.restricted').removeClass('disabled')
    },
    update: function (event, ui) {
      //generateReportObject();
      blurUpdate()
    },
  })

  // $(".legend ul").sortable({
  //     stop: function(){
  //         var chartID = $(this).parents('[data-component]').attr('data-chart-id');
  //         var chartType = $(this).parents('[data-component]').find('select option:selected').val();
  //         updateChart( chartID, chartType );
  //     }
  // });

  // $('[data-component="sponsors"] .img, [data-component="gallery"] .img, [data-component="number"] .container').sortable({
  //     handle: "[data-action='move']",
  //     placeholder: "droppable-area",
  //     update: function( event, ui ) {
  //         generateReportObject();
  //     }
  // });

  //  Add New Page Actions
  $('article:not([data-page="contact"])').each(function () {
    $(this).after(
      '<div class="pageControls"><a href="#" data-action="addPage"><i class="fa fa-plus"></i> Insert New Page</a></div>',
    )
  })
}

function getPageList() {
  var pageListMarkup = []
  $('article').each(function (k, v) {
    //var pageLabel = $(this).find('h1').html().replace(/<div>/g,'&nbsp;').replace(/<\/div>/g,'');
    var pageLabel = $(this).find('#pageLabel h1').text()
    var pageBG = $(this).find('header').css('background')
    var opacity = $(this).find('.opacitySlider .val').text()
    var pageID = 'pg_' + Math.random().toString(36).substr(2, 9)
    $(this).attr('id', pageID)

    $('[data-action="addContactPage"]').show()

    if (k == 0) {
      pageListMarkup.push(
        '<li class="active ui-state-disabled"><a href="#' +
          pageID +
          '" style="box-shadow: inset 0 -50vh 0 rgba(0,0,0,' +
          opacity +
          '); background: ' +
          pageBG.replace(/"/g, '') +
          ';">' +
          pageLabel +
          '</a></li>',
      )
    } else if (pageLabel == 'Contact' || $(this).attr('data-page') == 'contact') {
      pageListMarkup.push(
        '<li class="ui-state-disabled"><a href="#' +
          pageID +
          '" style="box-shadow: inset 0 -50vh 0 rgba(0,0,0,' +
          opacity +
          '); background: ' +
          pageBG.replace(/"/g, '') +
          ';">' +
          pageLabel +
          '</a></li>',
      )
      $('[data-action="addContactPage"]').hide()
    } else {
      pageListMarkup.push(
        '<li><a href="#' +
          pageID +
          '" style="box-shadow: inset 0 -50vh 0 rgba(0,0,0,' +
          opacity +
          '); background: ' +
          pageBG.replace(/"/g, '') +
          ';">' +
          pageLabel +
          '</a></li>',
      )
    }
  })
  $('.pageList div').html('<ul>' + pageListMarkup.join('') + '</ul>')
  $('#mobileBuilderHeader .pageList div').html('<ul>' + pageListMarkup.join('') + '</ul>')

  // Reorder pages
  var originalIndex
  var newIndex

  var originalImage
  var newImage
  var gallery = $('#reportDetails')

  $('.pageList ul').sortable({
    items: 'li:not(.ui-state-disabled)',
    placeholder: 'droppable-area',
    update: function (event, ui) {
      setTimeout(function () {
        //generateReportObject ();
        blurUpdate()
      }, 20)
    },
    start: function (ev, ui) {
      $('.pageControls').remove()
      originalIndex = ui.item.index()
      originalImage = gallery[0].children[originalIndex]
    },
    stop: function (ev, ui) {
      newIndex = ui.item.index()
      newImage = gallery[0].children[newIndex]
      if (originalIndex < newIndex) {
        $(newImage).after(originalImage)
      } else {
        $(newImage).before(originalImage)
      }
      setTimeout(function () {
        $('article:not([data-page="contact"])').each(function () {
          $(this).after(
            '<div class="pageControls"><a href="#" data-action="addPage"><i class="fa fa-plus"></i> Insert New Page</a></div>',
          )
        })
      }, 10)
    },
  })
}

function getPage(siblingElement) {
  //  Temporarily remove page controls
  $('.pageControls').remove()

  //  Structure Blank Page Markup
  var pageMarkup =
    '<article data-page="generic">' +
    '<div data-toc-label><input type="text" placeholder="Enter custom section title" /> <span><i class="fa fa-info-circle"></i><span data-infotip>This section title will be used in your report\'s table of contents.</span></span></div>' +
    '<header data-component="cover" data-controls="background,removePage">' +
    '<div class="container">' +
    '<h1 data-field="coverTitle" contenteditable="true">Enter Title</h1>' +
    '</div>' +
    '<div class="opacitySlider"><div data-opacity="10" data-action="changeOpacity"></div><span class="val">10%</span></div>' +
    '</header>' +
    '<div class="pageContents noflex"></div>' +
    layoutsMarkup +
    '</article>'

  siblingElement.after(pageMarkup)
  //generateReportObject();
  blurUpdate()
  getControls()
}

function getSection(siblingElement) {
  //  Temporarily remove page controls
  $('.pageControls').remove()

  //  Structure Blank Page Markup
  var pageMarkup =
    '<article data-page="generic">' +
    '<header data-component="cover" data-controls="background">' +
    '<div class="container">' +
    '<h1 data-field="coverTitle" contenteditable="true">Enter title</h1>' +
    '</div>' +
    '<div class="opacitySlider"><div data-opacity="10" data-action="changeOpacity"></div><span class="val">10%</span></div>' +
    '</header>' +
    '<div class="pageContents"></div>' +
    '</article>'

  siblingElement.after(pageMarkup)
  // generateReportObject();
  blurUpdate()
  getControls()
}

function autosaveIndicator() {
  var d = new Date() // for now
  var hr = d.getHours()
  var min = d.getMinutes()
  var sec = d.getSeconds()

  if (min < 10) {
    min = '0' + min
  }

  if (sec < 10) {
    sec = '0' + sec
  }

  if (hr > 12) {
    $('.saveIndicator').text('Saved ' + (hr - 12) + ':' + min + ':' + sec + ' pm')
  } else if (hr == 12) {
    $('.saveIndicator').text('Saved ' + hr + ':' + min + ':' + sec + ' pm')
  } else {
    $('.saveIndicator').text('Saved ' + hr + ':' + min + ':' + sec + ' am')
  }
  $('.saveIndicator').addClass('active')
  setTimeout(function () {
    $('.saveIndicator').removeClass('active')
  }, 3000)
}

function duplicateReport(reportID) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const url =
        'https://yearly-api-prod.herokuapp.com/api/v1/account_reports/' + reportID + '/duplicate'

      user
        .getIdToken(true)
        .then(function (idToken) {
          axios
            .get(url, {
              responseType: 'json',
              headers: { Authorization: idToken },
            })
            .then((response) => {
              //alert(JSON.stringify(response))
              $('#modalPublish, #overlay').addClass('active')
              var markup =
                '<div class="craftLink">' +
                '<h1>Report Duplicated</h1>' +
                '<p><b> Your report has been duplicated</b></p>' +
                '<div class="message"></div>' +
                '</div>'

              $('#modalPublish .reportLink').html(markup)
              window.location.reload()
            })
            .catch(function (err) {
              console.log(err)
            })
        })
        .catch(function (error) {
          console.log(error)
        }) //end of catch  user getToken
    }
  })
}

// TODO: Rename this to 'renderReportsList'
function iterate(json, uid, accessToken) {
  var username = json.data.username
  var reportSlug = ''
  var reportSlugs = []
  var reports = []
  $.each(json.data.reports, function (key, val) {
    var reportID = key
    var reportTitle = val.report_title
    var reportYear = val.report_year
    var reportStatus = val.report_status
    var reportCover = val.report_cover
    var DataReportID = val.id
    var reportViews = val.report_views
    var reportBuilderLink =
      val.new_builder_link + '&firebaseId=' + uid + '&accessToken=' + accessToken
    reportSlug = val.report_slug
    if (reportSlug) {
      reportSlugs.push(reportSlug)
      var report = reportSlug
    } else {
      var report = reportID
    }

    // If version is null, it's a report built with the older builder
    if (val.report_builder_version === null || val.report_builder_version === 1) {
      if (['Published!', 'Published'].includes(reportStatus)) {
        reportStatus =
          '<div class="reportStatus"><span class="published">' +
          reportStatus +
          '| LEGACY</span> <a href="#" data-action="analytics" data-username="' +
          username +
          '" data-report="' +
          reportSlug +
          '" data-views="' +
          reportViews +
          '">Analytics</a></div>'
      } else {
        reportStatus =
          '<div class="reportStatus"><span>' +
          reportStatus +
          '| LEGACY</span> <a href="#" data-action="analytics" data-username="' +
          username +
          '" data-report="' +
          reportSlug +
          '" data-views="' +
          reportViews +
          '">Analytics</a></div>'
      }

      if (val.subscription_status == 'paid') {
        var markup =
          '<div id="report_' +
          report +
          '" class="reportCard">' +
          '<a href="../builder?rid=' +
          DataReportID +
          '" class="reportDeets" style="background: var(--primaryColor) url(' +
          reportCover +
          ') no-repeat center center / cover;">' +
          '<div class="reportTitle">' +
          reportTitle +
          '</div>' +
          '</a>' +
          reportStatus +
          '<div class="more">' +
          '<a href="#" data-action="more"><i class="fa fa-ellipsis-h"></i></a>' +
          '<div>' +
          '<a href="../builder?rid=' +
          DataReportID +
          '">Edit <i class="fa fa-pencil-alt"></i></a>' +
          /*           '<a href="#" data-report="' +
          DataReportID +
          '" data-action="duplicate">Duplicate <i class="fa fa-copy"></i></a>' + */
          '<a href="#" data-report="' +
          DataReportID +
          '" data-action="delete">Delete <i class="fa fa-trash"></i></a>' +
          '</div>' +
          '</div>' +
          '</div>'
      }

      if (val.subscription_status == 'free') {
        var markup =
          '<div id="report_' +
          report +
          '" class="reportCard">' +
          '<a href="../builder?rid=' +
          DataReportID +
          '" class="reportDeets" style="background: var(--primaryColor) url(' +
          reportCover +
          ') no-repeat center center / cover;">' +
          '<div class="reportTitle">' +
          reportTitle +
          '</div>' +
          '</a>' +
          reportStatus +
          '<div class="more">' +
          '<a href="#" data-action="more"><i class="fa fa-ellipsis-h"></i></a>' +
          '<div>' +
          '<a href="../builder?rid=' +
          DataReportID +
          '">Edit <i class="fa fa-pencil-alt"></i></a>' +
          '<a href="#" data-report="' +
          DataReportID +
          '" data-action="delete">Delete <i class="fa fa-trash"></i></a>' +
          '</div>' +
          '</div>' +
          '</div>'
      }
    }

    $('#reports > div').append(markup)
    reports.push(markup)
  })

  $('#loadingIcon').css('visibility', 'hidden')
}

function modalReportFreeDuplicate() {
  $('#modalPublish, #overlay').addClass('active')
  $('#modalPublish .modalContainer h3').text('Non authorized action')
  var markup =
    '<div class="craftLink">' +
    '' +
    '<p>With a free account you can only create one report, if you want to create more, please  upgrade</p>' +
    '<a onclick="brandKit.renderModalSuscriptionFree()" class="btn-upgrade btn-upgrade-now">Upgrade to Yearly Pro</a>' +
    '</div>'
  $('#modalPublish .reportLink').html(markup)
}

function getReports() {
  console.log('getting reports here now')
  $('#loadingIcon').css('visibility', 'visible')
  var username = ''
  var reportSlug = ''

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const userAuthInfo = JSON.parse(localStorage.getItem('UserLogged'))
      const { accessToken } = userAuthInfo.stsTokenManager
      localStorage.setItem('uid', user.uid)
      const url =
        'https://yearly-api-legacy.herokuapp.com/api/v1/accounts/' +
        user.uid +
        '/get_account_reports'
      user
        .getIdToken(true)
        .then(function (idToken) {
          axios
            .get(url, {
              responseType: 'json',
              headers: { Authorization: idToken },
            })
            .then((res) => {
              if (res.status == 200) {
                var reportsArray = res.data.reports
                //$('#reports').prepend('<input id="reportsArrayId" name="reportsArrayId" type="hidden" value="'+reportsArray.length+'">' );
                localStorage.setItem('reportsLenth', reportsArray.length)
                if (reportsArray.length == 0) {
                  if (getParam('user')) {
                    var loading =
                      '<div class="reportLink"><div id="loadingIcon" class="fa-3x">' +
                      '<i class="fas fa-circle-notch fa-spin"></i>' +
                      '</div></div>'
                    $('#modalPublish').html(loading)
                  } else {
                    $('#welcome, #overlay').addClass('active')
                    $(document).on('click', '#overlayClaim', function (e) {
                      window.location = '../claim?reg=free'
                      e.preventDefault()
                    })
                  }
                } else {
                  iterate(res, user.uid, idToken)
                }
              }
              // console.log('From then promise '+JSON.stringify('idToken: '+res));
            })
            .catch(function (err) {
              $('#loadingIcon').css('visibility', 'hidden')
              $('.interfaceContainer').append('<p>' + err + '</p>')

              alert(err)
            })
        })
        .catch(function (error) {
          alert(error)
          $('#loadingIcon').css('visibility', 'hidden')
          $('.interfaceContainer').append('<p>' + err + '</p>')
        })
    }
  })
}

function checkIfPublished() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const urlpost =
        'https://yearly-api-prod.herokuapp.com/api/v1/account_reports/' +
        getParam('rid') +
        '?firebase_id=' +
        user.uid
      user
        .getIdToken(true)
        .then((idToken) => {
          axios
            .get(urlpost, {
              headers: { Authorization: idToken },
            })
            .then((json) => {
              console.log('check if published ' + JSON.stringify(json))
              if (json.status == 200) {
                console.log('check if published ok')
                //alert("Saved" );
              }
            })
            .catch((error) => alert(JSON.stringify(error)))
        })
        .catch(function (error) {
          console.log(error)
          alert(JSON.stringify(error))
        })
    }
  })
}

function getSocial() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const url = 'https://yearly-api-prod.herokuapp.com/api/v1/accounts/' + user.uid
      user
        .getIdToken(true)
        .then(function (idToken) {
          //console.log(idToken)
          axios
            .get(url, {
              responseType: 'json',
              headers: { Authorization: idToken },
            })
            .then((res) => {
              if (res.status == 200) {
                //console.log('From IF '+JSON.stringify(res.data));
                //iterate(res, user.uid)
              }
              // console.log('From then promise '+JSON.stringify('idToken: '+res));

              var snapshot = res.data
              var social = []

              // Check for social profiles
              if (snapshot.organizationTwitter) {
                social.push(
                  '<a target="_blank" href="' +
                    snapshot.organizationTwitter +
                    '"><i class="fab fa-twitter"></i></a>',
                )
              }

              if (snapshot.organizationFacebook) {
                social.push(
                  '<a target="_blank" href="' +
                    snapshot.organizationFacebook +
                    '"><i class="fab fa-facebook-f"></i></a>',
                )
              }

              if (snapshot.organizationInstagram) {
                social.push(
                  '<a target="_blank" href="' +
                    snapshot.organizationInstagram +
                    '"><i class="fab fa-instagram"></i></a>',
                )
              }

              if (snapshot.organizationLinkedIn) {
                social.push(
                  '<a target="_blank" href="' +
                    snapshot.organizationLinkedIn +
                    '"><i class="fab fa-linkedin-in"></i></a>',
                )
              }

              if (snapshot.organizationYoutube) {
                social.push(
                  '<a target="_blank" href="' +
                    snapshot.organizationYoutube +
                    '"><i class="fab fa-youtube"></i></a>',
                )
              }

              if (snapshot.organizationPinterest) {
                social.push(
                  '<a target="_blank" href="' +
                    snapshot.organizationPinterest +
                    '"><i class="fab fa-pinterest-p"></i></a>',
                )
              }

              // social.join(' ')
              $('.socialProfiles').html(social.join(''))
              //generateReportObject();
            })
            .catch(function (err) {
              alert(err)
            })
        })
        .catch(function (error) {
          alert(error)
        })
    }
  })
}

function publishReport(reportName) {
  var loading =
    '<div id="loadingIcon" class="fa-3x">' +
    '<i class="fas fa-circle-notch fa-spin"></i>' +
    '</div>'
  $('#modalPublish .reportLink .craftLink').append(loading)

  var reportURL = ''
  var username = ''
  $('[data-action="moveItem"], [data-action="removeItem"] ').attr(
    'style',
    'display:none !important',
  )
  // adjustSocialPostSize();
  adjustParagraphsSize()
  adjustQouteSize()

  function adjustParagraphsSize() {
    var posts = null
    const interval = setInterval(() => {
      posts = $('[data-component="paragraph"]')
      if (posts.length) {
        clearInterval(interval)
        posts.each(function () {
          $(this)
            .closest('[data-columns="2full"]')
            .parent()
            .attr('style', 'position: static !important')
        })
      }
    }, 500)
  }
  function adjustQouteSize() {
    var posts = null
    const interval = setInterval(() => {
      posts = $('[data-component="quote"]')
      if (posts.length) {
        clearInterval(interval)
        posts.each(function () {
          $(this)
            .closest('[data-columns="2full"]')
            .parent()
            .attr('style', 'position: static !important')
        })
      }
    }, 500)
  }

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const url = 'https://yearly-api-prod.herokuapp.com/api/v1/accounts/' + user.uid

      user
        .getIdToken(true)
        .then(function (idToken) {
          axios
            .get(url, {
              headers: { Authorization: idToken },
            })
            .then((account) => {
              //firebase.database().ref('/accounts/' + user.uid ).once('value').then(function( snapshot ) {
              //var snapshot = snapshot.val();
              var snapshot = account.data

              username = snapshot.username

              var userLog = localStorage.getItem('UserLogged')
              var userLogData = JSON.parse(userLog)
              //console.log( userLogData)
              //console.log('userLog publish '+ userLog.uid)
              //reportURL = 'http://yearly.report/from/'+username+'/'+reportName+'?idToken='+userLogData.stsTokenManager.accessToken+'&uid='+userLogData.uid+'&username='+username+'&rid='+getParam('rid');

              // TODO: Replace the hard-coded production URL with a dynamic one from the environment.
              var reportTitle = $('[data-field="reportTitle"]').text() //$("#titleReport").text();
              reportTitle = reportTitle.replace(/ /g, '-').toLowerCase()
              reportURL = 'http://yearly.report/from/' + username + '/' + reportName
              var reportMarkup = $('#reportContainer').html()
              var reportCover = $('[data-field="reportCover"]').val()
              var contact = ''
              var logo = ''
              var social = []
              // END TODO

              // Check for social profiles
              if (snapshot.organizationTwitter) {
                social.push(
                  '<a target="_blank" href="' +
                    snapshot.organizationTwitter +
                    '"><i class="fab fa-twitter"></i></a>',
                )
              }

              if (snapshot.organizationFacebook) {
                social.push(
                  '<a target="_blank" href="' +
                    snapshot.organizationFacebook +
                    '"><i class="fab fa-facebook-f"></i></a>',
                )
              }

              if (snapshot.organizationInstagram) {
                social.push(
                  '<a target="_blank" href="' +
                    snapshot.organizationInstagram +
                    '"><i class="fab fa-instagram"></i></a>',
                )
              }

              if (snapshot.organizationLinkedIn) {
                social.push(
                  '<a target="_blank" href="' +
                    snapshot.organizationLinkedIn +
                    '"><i class="fab fa-linkedin-in"></i></a>',
                )
              }

              if (snapshot.organizationYoutube) {
                social.push(
                  '<a target="_blank" href="' +
                    snapshot.organizationYoutube +
                    '"><i class="fab fa-youtube"></i></a>',
                )
              }

              if (snapshot.organizationAddress) {
                address = snapshot.organizationAddress.replace(/\n/g, '<br>')
              } else {
                address = ''
              }

              console.log('Social')

              var contactInfoMarkup =
                '<div>' +
                '<p><strong>' +
                snapshot.organization +
                '</strong></p>' +
                '<p>' +
                address +
                '</p>' +
                '<div>' +
                social.join(' ') +
                '</div>' +
                '</div>'

              contact = contactInfoMarkup
              logo = snapshot.organizationLogo

              createPollDB(username, reportName)

              /*firebase.database().ref('accounts/' + user.uid + '/reports/' + getParam('rid') ).update({
                            reportStatus: 'Published!'
                        });*/
              //alert(reportTitle)

              var dataUpPublish = {
                report: {
                  report_status: 'Published',
                  report_slug: reportName,
                },
              }

              const urlpost =
                'https://yearly-api-prod.herokuapp.com/api/v1/account_reports/' +
                getParam('rid') +
                '?firebase_id=' +
                user.uid
              /*user.getIdToken(true)
                        .then( idToken =>
                        { */

              axios
                .put(urlpost, dataUpPublish, {
                  headers: { Authorization: idToken, 'access-token': idToken, uid: user.uid },
                })
                .then((json) => {
                  console.log('data from axios put ' + json)

                  if (json.status == 200) {
                  }
                })
                .catch((error) => alert(JSON.stringify(error)))
              const urlpost1 =
                'https://yearly-api-legacy.herokuapp.com/api/v1/account_reports/' +
                getParam('rid') +
                '?firebase_id=' +
                user.uid
              axios
                .put(urlpost, dataUpPublish, {
                  headers: { Authorization: idToken, 'access-token': idToken, uid: user.uid },
                })
                .then((json) => {
                  console.log('data from axios put ' + json)

                  if (json.status == 200) {
                  }
                })
                .catch((error) => alert(JSON.stringify(error)))

              var markup =
                '<div class="craftLink">' +
                '<h1>Report Published!</h1>' +
                '<p>Your report is published and ready to be shared.</p>' +
                '<a href="' +
                reportURL +
                '" target="_blank" class="btn">View The Published Report</a>' +
                '</div>'
              $('#modalPublish .reportLink').html(markup)
              //$( "a[data-action='publish']" ).hide();

              $("a[data-action='publish']").replaceWith(
                '<a href="#"  onclick="updateReport()" style="background: #0084FF; color: white;" ><svg class="svg-inline--fa fa-sync fa-w-16" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="sync" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M440.935 12.574l3.966 82.766C399.416 41.904 331.674 8 256 8 134.813 8 33.933 94.924 12.296 209.824 10.908 217.193 16.604 224 24.103 224h49.084c5.57 0 10.377-3.842 11.676-9.259C103.407 137.408 172.931 80 256 80c60.893 0 114.512 30.856 146.104 77.801l-101.53-4.865c-6.845-.328-12.574 5.133-12.574 11.986v47.411c0 6.627 5.373 12 12 12h200.333c6.627 0 12-5.373 12-12V12c0-6.627-5.373-12-12-12h-47.411c-6.853 0-12.315 5.729-11.987 12.574zM256 432c-60.895 0-114.517-30.858-146.109-77.805l101.868 4.871c6.845.327 12.573-5.134 12.573-11.986v-47.412c0-6.627-5.373-12-12-12H12c-6.627 0-12 5.373-12 12V500c0 6.627 5.373 12 12 12h47.385c6.863 0 12.328-5.745 11.985-12.599l-4.129-82.575C112.725 470.166 180.405 504 256 504c121.187 0 222.067-86.924 243.704-201.824 1.388-7.369-4.308-14.176-11.807-14.176h-49.084c-5.57 0-10.377 3.842-11.676 9.259C408.593 374.592 339.069 432 256 432z"></path></svg><!-- <i class="fa fa-sync"></i> --></a><span>Update</span>',
              )
              $("a[data-action='preview']").replaceWith(
                '<a onclick="shareModal()" data-action="share" > <i class="fa fa-share"></i></a><span>Share</span>',
              )
              $("li[data-action='openThemeEditor']").replaceWith(
                '<li><a href="#" data-action="preview"><i class="fa fa-eye"></i> </a><span>Preview</span></li>',
              )
              $('#builderActions-leftBar').append(
                '<li data-action="openThemeEditor"><a href="#" data-action="close"><i class="fa fa-font"></i></a><span>Fonts</span><div id="themeOptions"><div><h3>Fonts <div><a href="#" data-action="showMyFonts">My Fonts <img class="star-free-account" src="../assets/img/icons/star.png" alt="info" /></a> <a href="#" class="active" data-action="showPrimaryFonts">Headings</a> <a href="#" data-action="showSecondaryFonts">Body</a></div></h3><div class="formItem"><div class="fontList primary" style="overflow: auto; height: 30rem;"></div></div><div class="formItem" style="display: none;"><div class="fontList secondary" style="overflow: auto; height: 30rem;"></div></div> </div> </div></li>',
              )
              loadThemeFonts()
              //$("#builderActions-leftBar" ).append('<li><a href="#"  onclick="updateReport()" style="background: #0084FF; color: white;" ><svg class="svg-inline--fa fa-sync fa-w-16" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="sync" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M440.935 12.574l3.966 82.766C399.416 41.904 331.674 8 256 8 134.813 8 33.933 94.924 12.296 209.824 10.908 217.193 16.604 224 24.103 224h49.084c5.57 0 10.377-3.842 11.676-9.259C103.407 137.408 172.931 80 256 80c60.893 0 114.512 30.856 146.104 77.801l-101.53-4.865c-6.845-.328-12.574 5.133-12.574 11.986v47.411c0 6.627 5.373 12 12 12h200.333c6.627 0 12-5.373 12-12V12c0-6.627-5.373-12-12-12h-47.411c-6.853 0-12.315 5.729-11.987 12.574zM256 432c-60.895 0-114.517-30.858-146.109-77.805l101.868 4.871c6.845.327 12.573-5.134 12.573-11.986v-47.412c0-6.627-5.373-12-12-12H12c-6.627 0-12 5.373-12 12V500c0 6.627 5.373 12 12 12h47.385c6.863 0 12.328-5.745 11.985-12.599l-4.129-82.575C112.725 470.166 180.405 504 256 504c121.187 0 222.067-86.924 243.704-201.824 1.388-7.369-4.308-14.176-11.807-14.176h-49.084c-5.57 0-10.377 3.842-11.676 9.259C408.593 374.592 339.069 432 256 432z"></path></svg><!-- <i class="fa fa-sync"></i> --></a><span>Update</span></li>');

              // $('.reportLink2').html('<p><i class="fa fa-link"></i> <a href="'+reportURL+'" target="_blank">'+reportURL+'</a></p>');
              console.log('Report Published!')
              $('[data-action="moveItem"], [data-action="removeItem"] ').removeAttr('style')
              // removeAdjustment();
              removeAdjustmentParagraph()
              removeAdjustmentQuote()
              /* function removeAdjustment(){
                            var posts = null;
                            const interval = setInterval(() => {
                                posts = $('[data-component="social"] .container')
                                if(posts.length) {
                                    clearInterval(interval)
                                    posts.each(function() {
                                        $(this).closest("[data-columns]").parent().removeAttr("style");
                                        var iframe = $(this).find('iframe')
                                        iframe.removeAttr("style");
                                    });
                                }
                            }, 500);
                        } */
              function removeAdjustmentParagraph() {
                var posts = null
                const interval = setInterval(() => {
                  posts = $('[data-component="paragraph"]')
                  if (posts.length) {
                    clearInterval(interval)
                    posts.each(function () {
                      $(this).closest('[data-columns]').parent().removeAttr('style')
                    })
                  }
                }, 500)
              }
              function removeAdjustmentQuote() {
                var posts = null
                const interval = setInterval(() => {
                  posts = $('[data-component="quote"]')
                  if (posts.length) {
                    clearInterval(interval)
                    posts.each(function () {
                      $(this).closest('[data-columns]').parent().removeAttr('style')
                    })
                  }
                }, 500)
              }
            })
            .catch((error) => alert(JSON.stringify(error)))
        })
        .catch(function (error) {
          console.log(error)
          alert(JSON.stringify(error))
        })

      /*}, function(error){
                console.log('step2');
                if(error){
                    console.error( error );
                } else {                        
                    console.log("Profile data fetched! See below.");
                }
            });*/
    }
  })
}

function generateReportObject(update) {
  $('.modulesList').remove()
  // TODO: Save markup to individual pages
  if (update == 'publish') {
    var reportTitle = $('[data-field="reportTitle"]').text()
    var reportYear = $('[data-field="reportYear"]').text()
    var reportLogo = ''
    var reportMarkup = $('#reportContainer').html()
    var reportCover = $('[data-field="reportCover"]').val()
    var reportid = $('#reportId').val()
    var reportstatus = $('#reportStatus').val()

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var data = {
          report: {
            report_builder_version: 2,
            report_title: reportTitle,
            report_year: reportYear,
            report_logo: reportLogo,
            report_status: reportstatus,
            report_markup: reportMarkup,
            report_cover: reportCover,
          },
        } //end of object data

        var dataUpPublish = {
          report: {
            report_status: 'Publish!',
          },
        }

        const urlpost =
          'https://yearly-api-prod.herokuapp.com/api/v1/account_reports/' +
          reportid +
          '?firebase_id=' +
          user.uid
        user
          .getIdToken(true)
          .then((idToken) => {
            axios
              .put(urlpost, dataUpPublish, {
                headers: { Authorization: idToken, 'access-token': idToken, uid: user.uid },
              })
              .then((json) => {
                console.log('data from axios put ' + json)

                if (json.status == 200) {
                  //console.log("Update to new endpoint ok "+JSON.stringify(json ));
                  alert('Published!' + JSON.stringify(json))
                }
              })
              .catch((error) => alert(JSON.stringify(error)))
          })
          .catch(function (error) {
            console.log(error)
            alert(JSON.stringify(error))
          })

        /*firebase.database().ref('publishedReports/' + getParam('rid') ).update({
                    reportTitle:  reportTitle,
                    reportYear:   reportYear,
                    reportLogo:   reportLogo,
                    reportMarkup: reportMarkup,
                    reportCover: reportCover
                });
                firebase.database().ref('accounts/' + user.uid + '/reports/' + getParam('rid') ).update({
                    reportTitle:  reportTitle,
                    reportYear:   reportYear,
                    reportLogo:   reportLogo,
                    reportStatus: 'Published!',
                    reportMarkup: reportMarkup,
                    reportCover:  reportCover
                });*/

        // TODO: Replace the hard-coded production URL here with a dynamic URL for the environment
        $('#modalPublish .reportLink').html(
          '<p>Your report is published at the link below.</p><input readonly type="text" value="https://yearly.report/doc/' +
            getParam('rid') +
            '" />',
        )
        console.log('Report Published!')
        // END TODO
      }
    })
    getControls()
    autosaveIndicator()
    enableEditor()
  }

  $('#twitterscript').remove()
  $('body').append(
    '<script id="twitterscript" async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
  )
  twttr.widgets.load(document.getElementById('reportDetails'))
}

function getOrganizationProfile(status) {
  if (status == 'public') {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const url = 'https://yearly-api-prod.herokuapp.com/api/v1/accounts/' + user.uid
        user
          .getIdToken(true)
          .then(function (idToken) {
            axios
              .get(url, {
                responseType: 'json',
                headers: { Authorization: idToken },
              })
              .then((json) => {
                //firebase.database().ref('/accounts/' + user.uid ).once('value').then(function( snapshot ) {
                var snapshot = json.data

                var social = []

                // Check for social profiles
                if (snapshot.organizationTwitter) {
                  social.push(
                    '<a target="_blank" href="' +
                      snapshot.organizationTwitter +
                      '"><i class="fab fa-twitter"></i></a>',
                  )
                }

                if (snapshot.organizationFacebook) {
                  social.push(
                    '<a target="_blank" href="' +
                      snapshot.organizationFacebook +
                      '"><i class="fab fa-facebook-f"></i></a>',
                  )
                }

                if (snapshot.organizationInstagram) {
                  social.push(
                    '<a target="_blank" href="' +
                      snapshot.organizationInstagram +
                      '"><i class="fab fa-instagram"></i></a>',
                  )
                }

                if (snapshot.organizationLinkedIn) {
                  social.push(
                    '<a target="_blank" href="' +
                      snapshot.organizationLinkedIn +
                      '"><i class="fab fa-linkedin-in"></i></a>',
                  )
                }

                if (snapshot.organizationYoutube) {
                  social.push(
                    '<a target="_blank" href="' +
                      snapshot.organizationYoutube +
                      '"><i class="fab fa-youtube"></i></a>',
                  )
                }

                if (snapshot.organizationAddress) {
                  address = snapshot.organizationAddress.replace(/\n/g, '<br>')
                } else {
                  address = ''
                }
                var contactInfoMarkup =
                  '<div>' +
                  '<p><strong>' +
                  snapshot.organization +
                  '</strong></p>' +
                  '<p>' +
                  address +
                  '</p>' +
                  '<div>' +
                  social.join(' ') +
                  '</div>' +
                  '</div>'
                $('[data-page="page_yearlycontact"] header').html(contactInfoMarkup)
                $('.logo').css({
                  background:
                    '#fff url(' + snapshot.organizationLogo + ') no-repeat center center / cover',
                })
              })
              .catch(function (err) {
                console.log(err)
              })
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    })
  } else if (status == 'share') {
    var uid = getParam('uid')

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        //fetch('https://yearly-api-prod.herokuapp.com/api/v1/accounts/'+user.uid)
        const url = 'https://yearly-api-prod.herokuapp.com/api/v1/accounts/' + getParam('uid')
        user
          .getIdToken(true)
          .then(function (idToken) {
            axios
              .get(url, {
                responseType: 'json',
                headers: { Authorization: idToken },
              })
              .then((json) => {
                //firebase.database().ref('/accounts/' + uid ).once('value').then(function( snapshot ) {
                //alert(JSON.stringify(json))
                var snapshot = json.data

                var social = []

                // Check for social profiles
                if (snapshot.organizationTwitter) {
                  social.push(
                    '<a target="_blank" href="' +
                      snapshot.organizationTwitter +
                      '"><i class="fab fa-twitter"></i></a>',
                  )
                }

                if (snapshot.organizationFacebook) {
                  social.push(
                    '<a target="_blank" href="' +
                      snapshot.organizationFacebook +
                      '"><i class="fab fa-facebook-f"></i></a>',
                  )
                }

                if (snapshot.organizationInstagram) {
                  social.push(
                    '<a target="_blank" href="' +
                      snapshot.organizationInstagram +
                      '"><i class="fab fa-instagram"></i></a>',
                  )
                }

                if (snapshot.organizationLinkedIn) {
                  social.push(
                    '<a target="_blank" href="' +
                      snapshot.organizationLinkedIn +
                      '"><i class="fab fa-linkedin-in"></i></a>',
                  )
                }

                if (snapshot.organizationYoutube) {
                  social.push(
                    '<a target="_blank" href="' +
                      snapshot.organizationYoutube +
                      '"><i class="fab fa-youtube"></i></a>',
                  )
                }

                var contactInfoMarkup =
                  '<div>' +
                  '<p><strong>' +
                  snapshot.organization +
                  '</strong></p>' +
                  (snapshot.organizationAddress == undefined
                    ? ''
                    : '<p>' + snapshot.organizationAddress.replace(/\n/g, '<br>') + '</p>') +
                  '<div>' +
                  social.join(' ') +
                  '</div>' +
                  '</div>'
                $('[data-page="page_yearlycontact"] header').html(contactInfoMarkup)
                $('.logo').css({
                  background:
                    '#fff url(' + snapshot.organizationLogo + ') no-repeat center center / cover',
                })
              })
              .catch(function (error) {
                console.log(error)
              }) //end axios
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    })
  } else {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const url = 'https://yearly-api-prod.herokuapp.com/api/v1/accounts/' + user.uid
        user
          .getIdToken(true)
          .then(function (idToken) {
            axios
              .get(url, {
                responseType: 'json',
                headers: { Authorization: idToken },
              })
              .then((json) => {
                //firebase.database().ref('/accounts/' + user.uid ).once('value').then(function( snapshot ) {
                var snapshot = json.data

                if (snapshot.organizationLogo) {
                  $('#imgOrg').prop('src', snapshot.organizationLogo)
                }

                //console.log('from getOrganizationProfile '+ JSON.stringify(json))
                $.each(snapshot, function (key, val) {
                  //console.log(key)
                  if (key == 'currentPlan') {
                    $plan = 'plan_FCBc9BcvvDIGao'

                    if (val == 'plan_FFPuFE7vaycYjY') {
                      $('.packageDetails > div > div:nth-of-type(1)').text('Essentials')
                      $('.packageDetails > div > div:nth-of-type(2)').text('$135/mo.')
                      $('.packageDetails').append(
                        '<div class="upgrade">' +
                          '<p>Upgrade to Premium</p>' +
                          '<a href="https://yearly.report/contact-us/" target="_blank">Upgrade</a>' +
                          '</div>',
                      )
                      $('.packageDetails').append(
                        '<div class="upgrade">' +
                          '<p>Upgrade to Advanced</p>' +
                          '<a href="https://yearly.report/contact-us/" target="_blank">Upgrade</a>' +
                          '</div>',
                      )
                    }
                    if (val == 'plan_FFPurfSTHrpXTB') {
                      $('.packageDetails > div > div:nth-of-type(1)').text('Essentials')
                      $('.packageDetails > div > div:nth-of-type(2)').text('$1,480/yr.')
                      $('.packageDetails').append(
                        '<div class="upgrade">' +
                          '<p>Upgrade to Premium</p>' +
                          '<a href="https://yearly.report/contact-us/" target="_blank">Upgrade</a>' +
                          '</div>',
                      )
                      $('.packageDetails').append(
                        '<div class="upgrade">' +
                          '<p>Upgrade to Advanced</p>' +
                          '<a href="https://yearly.report/contact-us/" target="_blank">Upgrade</a>' +
                          '</div>',
                      )
                    }
                    if (val == 'plan_FFQ8QT5DvINi3U') {
                      $('.packageDetails > div > div:nth-of-type(1)').text('Premium')
                      $('.packageDetails > div > div:nth-of-type(2)').text('$175/mo.')
                      $('.packageDetails').append(
                        '<div class="upgrade">' +
                          '<p>Upgrade to Advanced</p>' +
                          '<a href="https://yearly.report/contact-us/" target="_blank">Upgrade</a>' +
                          '</div>',
                      )
                    }
                    if (val == 'plan_FFQ9zXMCwy3XkG') {
                      $('.packageDetails > div > div:nth-of-type(1)').text('Premium')
                      $('.packageDetails > div > div:nth-of-type(2)').text('$1,980/yr.')
                      $('.packageDetails').append(
                        '<div class="upgrade">' +
                          '<p>Upgrade to Advanced</p>' +
                          '<a href="https://yearly.report/contact-us/" target="_blank">Upgrade</a>' +
                          '</div>',
                      )
                    }
                    if (val == 'plan_FFQEV0Fo0okN4W') {
                      $('.packageDetails > div > div:nth-of-type(1)').text('Advanced')
                      $('.packageDetails > div > div:nth-of-type(2)').text('$260/mo.')
                    }
                    if (val == 'plan_FFQFlAdCMhRNq0') {
                      $('.packageDetails > div > div:nth-of-type(1)').text('Advanced')
                      $('.packageDetails > div > div:nth-of-type(2)').text('$2,880/yr.')
                    }
                  }
                  if (key == 'organizationLogo') {
                    if (val) {
                      $('[data-view="dashboard"] header .img > div:nth-of-type(1)').css({
                        background: '#fff url("' + val + '") no-repeat center center / cover',
                      })
                    }
                  }
                  if (key == 'organization') {
                    $('[data-view="dashboard"] header .img > div:nth-of-type(2)').text(val)
                    $('[name="' + key + '"]').val(val)
                  } else {
                    $('[name="' + key + '"]').val(val)
                  }
                })
              })
              .catch(function (err) {
                console.log(err)
              })
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    })
  }
}

async function updateOrganizationProfile() {
  var organizationAddress = $('[name="organizationAddress"]').val() //address
  var organization = $('[name="organization"]').val() //name
  var organizationTwitter = $('[name="organizationTwitter"]').val()
  var organizationFacebook = $('[name="organizationFacebook"]').val()
  var organizationInstagram = $('[name="organizationInstagram"]').val()
  var organizationLinkedIn = $('[name="organizationLinkedIn"]').val()
  var organizationYoutube = $('[name="organizationYoutube"]').val()
  var organizationPinterest = $('[name="organizationPinterest"]').val()
  //var organizationHolder = $( '[name="holder"]'   ).val();
  var organizationEmail = $('[name="email"]').val()

  var validSession = await brandKit.validLoginSession()
  if (!validSession) {
    localStorage.removeItem('UserLogged')
    window.location.href = '/'
    return
  }

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var data = {
        account: {
          organization: organization,
          organization_address: organizationAddress,
          organization_instagram: organizationInstagram,
          organization_facebook: organizationFacebook,
          organization_youtube: organizationYoutube,
          organization_linkedIn: organizationLinkedIn,
          organization_pinterest: organizationPinterest,
          organization_twitter: organizationTwitter,
        },
      }

      const urlUpdateOrg = 'https://yearly-api-prod.herokuapp.com/api/v1/accounts/' + user.uid
      user
        .getIdToken(true)
        .then((idToken) => {
          const token = idToken
          axios
            .put(urlUpdateOrg, data, {
              headers: { Authorization: token },
            })
            .then((json) => {
              $('#modalPublish, #overlay').addClass('active')
              var markup =
                '<div class="craftLink">' +
                '<h1>Organization Profile Updated</h1>' +
                '<p><b>Your account profile has been updated </b></p>' +
                '<div class="message" style="color: red;">Redirecting...</div>' +
                '</div>'

              $('#modalPublish .reportLink').html(markup)
              setInterval(function () {
                window.location.reload()
              }, 5000)
            })
            .catch((error) => alert(JSON.stringify(error)))
        })
        .catch(function (error) {
          console.log(error)
          alert(JSON.stringify(error))
        })
    }
  })
}

function createNewReportObject() {
  /*
        Creates a new unique firebase api api key.
        Once key is created, open a new report builder.
    */
  var key = firebase
    .database()
    .ref('accounts/' + firebase.auth().currentUser.uid)
    .child('reports')
    .push().key
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      firebase
        .database()
        .ref('accounts/' + user.uid + '/reports/' + key)
        .update({
          reportTitle: 'New Title Report from App',
          reportCover: 'https://yearly-2.vercel.app/img/cover3.jpeg',
          reportYear: 'Secondary New Title App',
          reportStatus: 'Draft',
          reportType: 'dp',
          reportMarkup:
            '<style id="primaryColor"></style><style id="secondaryColor"></style><style id="primaryFont"></style><style id="secondaryFont"></style><div id="reportDetails" data-theme="custom" data-primary-color="333333" data-secondary-color="333333" data-primary-font="futura" data-secondary-font="playfair"><article data-page="opening" id="pg_be1iiq60u"><header data-component="opening-cover" data-controls="background,layoutToggle" style="background: url(https://yearly-2.vercel.app/img/cover3.jpeg) no-repeat center center / cover;"><div class="container"><div class="reportCoverContents"><div class="img"><a href="#" data-action="controlAddImage">+ Add Image</a></div><h1 data-field="reportTitle" contenteditable="true">Laporan</h1></div><h2 data-field="reportYear" contenteditable="true">Secondary Title</h2><input type="hidden" data-field="reportCover" value="https://yearly-2.vercel.app/img/cover3.jpeg"></div><div class="opacitySlider"><div data-opacity="10" data-action="changeOpacity" class="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"><div class="ui-slider-range ui-corner-all ui-widget-header ui-slider-range-min" style="width: 9.09091%;"></div><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 9.09091%;"></span><div class="ui-slider-range ui-corner-all ui-widget-header ui-slider-range-min" style="width: 9.09091%;"></div></div><span class="val">10%</span></div><div class="controls"><a href="#" title="Add Background Image" data-action="controlBackground"><i class="fa fa-image"></i></a><a href="#" title="Toggle Layout" data-action="controlLayoutToggle"><i class="fa fa-toggle-off"></i></a></div></header><div class="pageContents noflex"></div><div class="layouts"><ul style="display: none;"><li><a href="#">Preset Layouts</a></li><li><a href="#">Blank Layouts</a></li></ul><div><a href="#" data-add-layout="1">   <img src="../icons/layout-a-icon.svg"> <span>Layout A</span> </a><a href="#" data-add-layout="1-1"> <img src="../icons/layout-b-icon.svg"> <span>Layout B</span> </a><a href="#" data-add-layout="1-2"> <img src="../icons/layout-c-icon.svg"> <span>Layout C</span> </a><a href="#" data-add-layout="2-2"> <img src="../icons/layout-d-icon.svg"> <span>Layout D</span> </a><a href="#" data-add-layout="1-6"> <img src="../icons/layout-e-icon.svg"> <span>Layout E</span> </a><a href="#" data-add-layout="2-6"> <img src="../icons/layout-f-icon.svg"> <span>Layout F</span> </a><a href="#" data-add-layout="6-6"> <img src="../icons/layout-g-icon.svg"> <span>Layout G</span> </a></div><div><a href="#" data-add-component="presidentsLetter">   <img src="../icons/layout-letter-icon.svg"> <span>Letter/Story</span> </a><a href="#" data-add-component="donorList"> <img src="../icons/layout-donors-icon.svg"> <span>Donor List</span> </a><a href="#" data-add-component="donate"> <img src="../icons/layout-donate-icon.svg"> <span>Donate</span> </a><a href="#" data-add-component="staff"> <img src="../icons/layout-staff-icon.svg"> <span>Staff</span> </a><a href="#" data-add-component="survey"> <img src="../icons/layout-poll-icon.svg"> <span>Poll</span> </a></div></div></article><article data-page="contact" id="pg_s66uiv4ut"><header data-component="cover" data-controls="background" style="background: url(../img/cover4.jpeg) no-repeat center center / cover;"><div class="container"><div><div class="img"><a href="#" data-action="controlAddImage">+ Add Logo</a></div><h1 style="display: none;">Contact</h1><div data-field="organizationAddress" contenteditable="">1234 Main Street<br>Wasdsdsdshington, DC 00000<br>240.340.7301</div><div class="socialProfiles"></div></div></div><div class="opacitySlider"><div data-opacity="10" data-action="changeOpacity" class="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"><div class="ui-slider-range ui-corner-all ui-widget-header ui-slider-range-min" style="width: 9.09091%;"></div><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 9.09091%;"></span><div class="ui-slider-range ui-corner-all ui-widget-header ui-slider-range-min" style="width: 9.09091%;"></div></div><span class="val">10%</span></div><div class="controls"><a href="#" title="Add Background Image" data-action="controlBackground"><i class="fa fa-image"></i></a></div></header><div class="pageContents"></div></article></div>',
        })
    } //ned o if user
  })
  // TODO: Update this route to use "new_builder_link" from the AccountReport object.
  console.log('third token', idToken)
  window.location.href =
    'https://app.yearly.report/newbuilder/#/' +
    '?rid=' +
    key +
    '&tour=true' +
    '&firebaseId=' +
    user.uid +
    '&accessToken=' +
    idToken +
    '&refreshToken=' +
    idToken
}

function enableEditor() {
  var autolist = new AutoList()
  var editor = new MediumEditor(
    'section:not([data-component="chart"]) [contenteditable], [data-page="contact"] [contenteditable]',
    {
      extensions: {
        autolist: autolist,
      },
      toolbar: {
        buttons: [
          'bold',
          'italic',
          // 'underline'
          {
            name: 'h2',
            contentDefault: '<b>H<sub>2</sub></b>',
          },
          {
            name: 'h3',
            contentDefault: '<b>H<sub>3</sub></b>',
          },
          {
            name: 'unorderedlist',
            contentDefault: '<i class="fa fa-list-ul"></i>',
          },
          {
            name: 'orderedlist',
            contentDefault: '<i class="fa fa-list-ol"></i>',
          },
          {
            name: 'justifyLeft',
            contentDefault: '<i class="fa fa-align-left"></i>',
          },
          {
            name: 'justifyCenter',
            contentDefault: '<i class="fa fa-align-center"></i>',
          },
          {
            name: 'justifyRight',
            contentDefault: '<i class="fa fa-align-right"></i>',
          },
          {
            name: 'anchor',
            contentDefault: '<i class="fa fa-link"></i>',
          },
          {
            name: 'quote',
            contentDefault: '<i class="fa fa-quote-left"></i>',
          },
        ],
      },
    },
  )
  console.log('Editor Loaded')
}
function loadThemeFonts() {
  var headingFonts = [
    'Alfa Slab One',
    'Prata',
    'Raleway',
    'Playfair Display',
    'Quicksand',
    'Anton',
    'Josefin Sans',
    'Abril Fatface',
    'Questrial',
    'Amatic SC',
    'Cinzel',
    'Quattrocento',
    'Suez One',
    'Six Caps',
    'Staatliches',
    'Montserrat',
    'McLaren',
    'Merriweather',
    'Poppins',
    'Big Shoulders Display',
    'Permanent Marker',
    'Cormorant Garamond',
    'Alegreya Sans SC',
    'Yeseva One',
    'DM Serif Text',
    'Darker Grotesque',
    'Fahkwang',
    'Wire One',
    'Ubuntu',
    'Times New Roman',
    'Open Sans',
    'Bitter',
    'Noto Serif',
  ]

  var bodyFonts = [
    'Prata',
    'Raleway',
    'Playfair Display',
    'Quicksand',
    'Josefin Sans',
    'Questrial',
    'Quattrocento',
    'Montserrat',
    'McLaren',
    'Merriweather',
    'Poppins',
    'Cormorant Garamond',
    'Alegreya Sans SC',
    'Yeseva One',
    'DM Serif Text',
    'Darker Grotesque',
    'Fahkwang',
    'Ubuntu',
    'Times New Roman',
    'Open Sans',
    'Bitter',
    'Source Sans Pro',
  ]
  var fontPrimaryMarkupArr = []
  var fontSecondaryMarkupArr = []
  $.each(headingFonts, function (key, fontName) {
    if (
      fontName == 'Wire One' ||
      fontName == 'Darker Grotesque' ||
      fontName == 'Cormorant Garamond' ||
      fontName == 'Big Shoulders Display' ||
      fontName == 'Six Caps' ||
      fontName == 'Amatic SC'
    ) {
      fontSize = 'font-size: 2rem;'
    } else {
      fontSize = ''
    }
    fontPrimaryMarkupArr.push(
      '<div>' +
        '<input id="fontPOption' +
        key +
        '" type="radio" value="' +
        fontName +
        '" name="themeFontPrimary[]" data-field="data-primary-font" data-action="updatePrimaryFont" />' +
        '<label for="fontPOption' +
        key +
        '">' +
        '<div>' +
        fontName +
        '</div>' +
        '<div style="' +
        fontSize +
        " text-align: center; font-family: '" +
        fontName +
        '\';">Heading Sample</div>' +
        '</label>' +
        '</div>',
    )
  })
  $.each(bodyFonts, function (key, fontName) {
    fontSecondaryMarkupArr.push(
      '<div>' +
        '<input id="fontSOption' +
        key +
        '" type="radio" value="' +
        fontName +
        '" name="themeFontSecondary[]" data-field="data-secondary-font" data-action="updateSecondaryFont" />' +
        '<label for="fontSOption' +
        key +
        '">' +
        '<div>' +
        fontName +
        '</div>' +
        '<div style="font-family: \'' +
        fontName +
        '\';">The quick brown fox jumps over the lazy dog.</div>' +
        '</label>' +
        '</div>',
    )
  })
  var fontPrimaryMarkup = fontPrimaryMarkupArr.join(' ')
  var fontSecondaryMarkup = fontSecondaryMarkupArr.join(' ')
  $('.fontList.primary').html(fontPrimaryMarkup)
  $('.fontList.secondary').html(fontSecondaryMarkup)
  if (brandKit) brandKit.loadBuilderComponents('fonts')
}

function zoomStockPhoto(url) {
  $('.imgContainer').html('<img src="' + url + '" />')
}

function searchStockPhotos() {
  if ($('.search').val() == '') {
    var query = 'all'
  } else {
    var query = $('.search').val()
  }

  $.ajax({
    url: 'https://api.unsplash.com/search/photos',
    type: 'GET',
    dataType: 'json',
    data: {
      client_id: '12c0509629ebc9644a4b9a0c74e0250bdecc009588fb5f60b72cdc02926b6bcc',
      query: query,
      per_page: 30,
      page: 1,
    },
    success: function (data) {
      //console.log( data );
      var photos = []

      $.each(data.results, function (k, v) {
        if (v.width > v.height) {
          photos.push(
            '<div class="landscape"><img data-download-url="' +
              v.links.download +
              '?force=true" data-size-regular="' +
              v.urls.full +
              '" src="' +
              v.urls.small +
              '" /> <span>by ' +
              v.user.name +
              '</span></div>',
          )
        } else {
          photos.push(
            '<div class="portrait"><img data-download-url="' +
              v.links.download +
              '?force=true" data-size-regular="' +
              v.urls.full +
              '" src="' +
              v.urls.small +
              '" /><span>by ' +
              v.user.name +
              '</span></div>',
          )
        }
      })

      $('.assets').fadeOut(200)
      $('[data-action="getNextSetPhotos"]').fadeOut(200)

      setTimeout(function () {
        $('.assets').empty()
        $('[data-action="getNextSetPhotos"]').remove()
        $('#modalImageLibrary .assetsContainer').animate(
          {
            scrollTop: 0,
          },
          0,
          function () {
            setTimeout(function () {
              if (photos.length == 0) {
                $('.assets')
                  .append(
                    '<p style="width: 100%; color: #fff; text-align: center;font-size: 1.2rem; font-weight: 600;">Sorry. No photos based on those keywords.</p>',
                  )
                  .fadeIn(200)
              } else {
                $('.assets').append(photos.join('')).fadeIn(200)
                $('.assets').after(
                  '<a href="#" class="btn" data-action="getNextSetPhotos" data-page="2" data-max-page="' +
                    data.total_pages +
                    '">Load More Photos</a>',
                )
              }
            }, 0)
          },
        )
      }, 200)
    },
    error: function (error) {
      console.log('searchStockPhotos ' + error)
    },
  })
}

function getStockPhotos(page) {
  $('[data-action="getNextSetPhotos"]')
    .html('<span style="font-size: 1.5rem;"><i class="fa fa-spinner fa-spin"></i></span>')
    .addClass('fetching')

  if ($('.search').val() == '') {
    var query = 'all'
  } else {
    var query = $('.search').val()
  }

  setTimeout(function () {
    $.ajax({
      url: 'https://api.unsplash.com/search/photos',
      type: 'GET',
      dataType: 'json',
      data: {
        client_id: '12c0509629ebc9644a4b9a0c74e0250bdecc009588fb5f60b72cdc02926b6bcc',
        query: query,
        per_page: 30,
        page: page,
      },
      success: function (data) {
        var photos = []
        $.each(data.results, function (k, v) {
          if (v.width > v.height) {
            photos.push(
              '<div class="landscape"><img data-download-url="' +
                v.links.download +
                '?force=true" data-size-regular="' +
                v.urls.full +
                '" src="' +
                v.urls.small +
                '" /> <span>by ' +
                v.user.name +
                '</span></div>',
            )
          } else {
            photos.push(
              '<div class="portrait"><img data-download-url="' +
                v.links.download +
                '?force=true" data-size-regular="' +
                v.urls.full +
                '" src="' +
                v.urls.small +
                '" /><span>by ' +
                v.user.name +
                '</span></div>',
            )
          }
        })
        $('.assets').append(photos.join(''))

        // update button
        var maxPages = $('[data-action="getNextSetPhotos"]').attr('data-max-page')
        var currentPage = $('[data-action="getNextSetPhotos"]').attr('data-page')
        var nextPage = ++currentPage

        if (nextPage >= maxPages) {
          $('[data-action="getNextSetPhotos"]').remove()
        } else {
          $('[data-action="getNextSetPhotos"]').attr('data-page', nextPage)
          $('[data-action="getNextSetPhotos"]').text('Load More Photos').removeClass('fetching')
        }
      },
      error: function (error) {
        console.log('getStockPhotos ' + error)
      },
    })
  }, 300)
}

/////////////////////////////////////////////////////
//  USER FUNCTIONS                                 //
//  These functions are specific to user accounts  //
/////////////////////////////////////////////////////

function login() {
  var accEmail = $('input[name="accEmail"]').val()
  var accPassword = $('input[name="accPassword"]').val()

  firebase
    .auth()
    .signInWithEmailAndPassword(accEmail, accPassword)
    .then(function () {
      firebase.auth().onAuthStateChanged(function (user) {
        localStorage.setItem('UserLogged', JSON.stringify(user))

        firebase
          .database()
          .ref('userSession/' + user.uid)
          .update({
            sessionActive: true,
          })
        firebase
          .database()
          .ref('userSessionForce/' + user.id)
          .update({
            sessionForce: false,
          })
      })

      //window.location.href = "dashboard";
    })
    .catch(function (error) {
      alert(error.message)
      return
    })
}

function logout() {
  if (confirm('Are you sure you want close this session?.')) {
    /*alert(localStorage.getItem('uid'))
        firebase.auth().onAuthStateChanged(async (user) => {
            await firebase.database().ref('userSession/' + user.uid).update({
                sessionActive: false
            });
        }); */

    firebase
      .auth()
      .signOut()
      .then(async () => {
        //await console.log('Esperando...viene remove local storage data')
        var uid = localStorage.getItem('uid')
        firebase
          .database()
          .ref('userSession/' + uid)
          .update({
            sessionActive: false,
          })
        localStorage.removeItem('UserLogged')
        localStorage.removeItem('uid')
        window.location.href = '/'
      })
      .catch(function (error) {
        alert(error.message)
        return
      })
  }
} //end logut function

function createAccount() {
  var accEmail = $('input[name="accEmail"]').val()
  var accPassword = $('input[name="accPassword"]').val()
  var accFullName = $('input[name="accFullName"]').val()
  var accOrgName = $('input[name="accOrgName"]').val()
  firebase
    .auth()
    .createUserWithEmailAndPassword(accEmail, accPassword)
    .then(function () {
      $('.step-1').removeClass('active').addClass('completed')
      $('.step-2').addClass('active')

      if (/^[a-zA-Z0-9- ]*$/.test(accFullName) == false) {
        alert(error.message)
      } else {
        createUserOject(accEmail, accOrgName, accFullName)
      }
    })
    .catch(function (error) {
      alert(error.message)
      return
    })
}

function createUserOject(accEmail, accOrgName, accFullName) {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      firebase
        .database()
        .ref('accounts/' + user.uid)
        .set({
          name: accFullName,
          organization: accOrgName,
          email: accEmail,
        })
    }
  })
}

function blobToFile(theBlob, fileName) {
  //A Blob() is almost a File() - it's just missing the two properties below which we will add
  theBlob.lastModifiedDate = new Date()
  theBlob.name = fileName
  return theBlob
}

function updateColor(selectedElForColor, hex, type) {
  var component = selectedElForColor.parents('[data-component]').attr('data-component')

  if (component == 'number') {
    if (type == 'background') {
      selectedElForColor.parents('.num').css({
        'background-color': '#' + hex + ' !important',
      })
    }
    if (type == 'text') {
      selectedElForColor.parents('.num').css({
        color: '#' + hex + ' !important',
      })
    }
  } else if (component == 'paragraph') {
    if (type == 'background') {
      selectedElForColor.parents('[data-component]').css({
        'background-color': '#' + hex + ' !important',
      })
    }
    if (type == 'text') {
      selectedElForColor.parents('[data-component]').css({
        color: '#' + hex + ' !important',
      })
    }
  } else if (component == 'impactStory' || component == 'presidentsLetter') {
    if (type == 'background') {
      selectedElForColor.parents('[data-component]').css({
        'background-color': '#' + hex + ' !important',
      })
    }
    if (type == 'text') {
      selectedElForColor.parents('[data-component]').css({
        color: '#' + hex + ' !important',
      })
    }
  } else if (component == 'table') {
    if (type == 'background') {
      selectedElForColor.parents('[data-component]').css({
        'background-color': '#' + hex + ' !important',
      })
    }
    if (type == 'text') {
      selectedElForColor.parents('[data-component]').css({
        color: '#' + hex + ' !important',
      })
    }
  }
}

function createEditor(index, root) {
  var $root = $(root)

  // get reference to editor root (for preview overlay)
  var $target = $('div', root)

  // Get reference to preview image
  var $preview = $('img', root)

  // Get initial crop coordinates from dataset
  var aspectRatio = $root.data('aspectRatio')

  var center = $root
    .data('center')
    .split(',')
    .reduce(
      function (prev, curr, index) {
        var key = index === 0 ? 'x' : 'y'
        prev[key] = parseFloat(curr)
        return prev
      },
      { x: 0, y: 0 },
    )

  // Create the current crop object, we'll send this to Doka to show the initial crop
  var currentCrop = {
    aspectRatio: aspectRatio,
    center: center,
  }

  // The original image source to use when editing
  var currentSource = $preview.data('src')

  // Our centered edit button
  var $editButton = $('[data-action="edit"]', root)
  $editButton.on('click', function () {
    root.dataset.state = 'open'

    $.fn.doka.create($target[0], {
      utils: $root.data('utils').split(','),
      src: currentSource,
      crop: currentCrop,
      outputData: true,
      allowAutoDestroy: true,
      styleLayoutMode: $root.data('mode'),
      onconfirm: function (output) {
        currentCrop = output.data.crop
        $preview.attr('src', URL.createObjectURL(output.file))
      },
      onclose: function () {
        root.dataset.state = 'closed'
      },
    })
  })
}

function check_charcount(contenteditable, maxCharCount, e) {
  if (e.which != 8 && contenteditable.text().length > maxCharCount) {
    e.preventDefault()
  }
}

function styleEditorMarkup() {
  var markup =
    '<div id="styleEditor">' +
    '<div id="contentSelector" style="display:flex;">' +
    '<div><input type="radio" name="content" id="contentSelector__background" value="background" checked /><label for="contentSelector__background">BG Color</label></div>' +
    '<div><input type="radio" name="content" id="contentSelector__mypalettes" value="mypalettes" /><label for="contentSelector__mypalettes">My Palettes </label></div>' +
    '<div><input type="radio" name="content" id="contentSelector__heading" value="headings" /><label for="contentSelector__heading">Headings</label></div>' +
    '<div><input type="radio" name="content" id="contentSelector__body" value="body"/><label for="contentSelector__body">Body</label></div>' +
    '</div>' +
    '<div id="colorInput">' +
    '<input type="text" maxlength="7" placeholder="Enter Color Code" />' +
    '<button onclick="saveColor()">+</button>' +
    '</div>' +
    '<div id="colorPicker"></div>' +
    '<div data-style="swatches" class="styleSection">' +
    '<strong>Swatches</strong>' +
    '<div id="savedColors">' +
    '<div><a href="#" data-color="#ffffff" title="Current #ffffff" style="background: #ffffff;"></a><a href="#" data-action="remove">X</a></div>' +
    '<div><a href="#" data-color="#000000" title="Current #000000" style="background: #000000;"></a><a href="#" data-action="remove">X</a></div>' +
    '</div>' +
    '</div>' +
    '<div data-style="textSize" style="display: none;" class="styleSection">' +
    '<strong>Text Size</strong>' +
    '<div id="textSizing">' +
    '<div><input type="radio" name="textSizing" id="textString__s" value="s" /><label for="textString__s">S</label></div>' +
    '<div><input type="radio" name="textSizing" id="textString__m" value="m" checked/><label for="textString__m">M</label></div>' +
    '<div><input type="radio" name="textSizing" id="textString__l" value="l"/><label for="textString__l">L</label></div>' +
    '</div>' +
    '</div>' +
    '<div data-style="textColumns" class="styleSection">' +
    '<strong>Text Columns</strong>' +
    '<div id="textColumns">' +
    '<div><input type="radio" name="textColumns" id="textColumns__1" value="1" checked /><label for="textColumns__1">1</label></div>' +
    '<div><input type="radio" name="textColumns" id="textColumns__2" value="2" /><label for="textColumns__2">2</label></div>' +
    '<div><input type="radio" name="textColumns" id="textColumns__3" value="3" /><label for="textColumns__3">3</label></div>' +
    '</div>' +
    '</div>' +
    '<div data-style="imageOptions" class="styleSection">' +
    '<strong>Image Options</strong>' +
    '<div id="imageOptions">' +
    '<div><input type="radio" name="imageOptions" id="imageOptions__1" value="cover" /><label for="imageOptions__1">Fill</label></div>' +
    '<div><input type="radio" name="imageOptions" id="imageOptions__2" value="contain" /><label for="imageOptions__2">Fit</label></div>' +
    '</div>' +
    '</div>' +
    '<div data-style="horizontalAlign" class="styleSection">' +
    '<strong>Horizontal Alignment</strong>' +
    '<div id="horizontalAlign">' +
    '<div><input type="radio" name="horizontalAlign" id="horizontalAlign__1" value="left" /><label for="horizontalAlign__1">Left</label></div>' +
    '<div><input type="radio" name="horizontalAlign" id="horizontalAlign__2" value="center" /><label for="horizontalAlign__2">Center</label></div>' +
    '<div><input type="radio" name="horizontalAlign" id="horizontalAlign__3" value="right" /><label for="horizontalAlign__3">Right</label></div>' +
    '</div>' +
    '</div>' +
    '<div data-style="verticalAlign" class="styleSection">' +
    '<strong>vertical Alignment</strong>' +
    '<div id="verticalAlign">' +
    '<div><input type="radio" name="verticalAlign" id="verticalAlign__1" value="top" /><label for="verticalAlign__1">Top</label></div>' +
    '<div><input type="radio" name="verticalAlign" id="verticalAlign__2" value="center" /><label for="verticalAlign__2">Center</label></div>' +
    '<div><input type="radio" name="verticalAlign" id="verticalAlign__3" value="bottom" /><label for="verticalAlign__3">Bottom</label></div>' +
    '</div>' +
    '</div>' +
    '<div data-style="altText" class="styleSection">' +
    '<strong>Alt Text</strong>' +
    '<div id="altText">' +
    '<input type="text" placeholder="Enter alt text" name="altText" />' +
    '</div>' +
    '</div>' +
    '</div>'
  return markup
}

function styleEditorMarkupFree() {
  var markup =
    '<div id="styleEditor">' +
    '<div id="contentSelector" style="display:flex;">' +
    '<div><input type="radio" name="content" id="contentSelector__background" value="background" checked /><label for="contentSelector__background">BG Color</label></div>' +
    '<div><input type="radio" name="content" id="contentSelector__mypalettes" value="mypalettes" /><label for="contentSelector__mypalettes">My Palettes <img class="star-free-account" src="../assets/img/icons/star.png" alt="info" /></label></div>' +
    '<div><input type="radio" name="content" id="contentSelector__heading" value="headings" /><label for="contentSelector__heading">Headings</label></div>' +
    '<div><input type="radio" name="content" id="contentSelector__body" value="body"/><label for="contentSelector__body">Body</label></div>' +
    '</div>' +
    '<div id="colorInput">' +
    '<input type="text" maxlength="7" placeholder="Enter Color Code" />' +
    '<button onclick="saveColor()">+</button>' +
    '</div>' +
    '<div id="colorPicker"></div>' +
    '<div data-style="swatches" class="styleSection">' +
    '<strong>Swatches</strong>' +
    '<div id="savedColors">' +
    '<div><a href="#" data-color="#ffffff" title="Current #ffffff" style="background: #ffffff;"></a><a href="#" data-action="remove">X</a></div>' +
    '<div><a href="#" data-color="#000000" title="Current #000000" style="background: #000000;"></a><a href="#" data-action="remove">X</a></div>' +
    '</div>' +
    '</div>' +
    '<div data-style="textSize" style="display: none;" class="styleSection">' +
    '<strong>Text Size</strong>' +
    '<div id="textSizing">' +
    '<div><input type="radio" name="textSizing" id="textString__s" value="s" /><label for="textString__s">S</label></div>' +
    '<div><input type="radio" name="textSizing" id="textString__m" value="m" checked/><label for="textString__m">M</label></div>' +
    '<div><input type="radio" name="textSizing" id="textString__l" value="l"/><label for="textString__l">L</label></div>' +
    '</div>' +
    '</div>' +
    '<div data-style="textColumns" class="styleSection">' +
    '<strong>Text Columns</strong>' +
    '<div id="textColumns">' +
    '<div><input type="radio" name="textColumns" id="textColumns__1" value="1" checked /><label for="textColumns__1">1</label></div>' +
    '<div><input type="radio" name="textColumns" id="textColumns__2" value="2" /><label for="textColumns__2">2</label></div>' +
    '<div><input type="radio" name="textColumns" id="textColumns__3" value="3" /><label for="textColumns__3">3</label></div>' +
    '</div>' +
    '</div>' +
    '<div data-style="imageOptions" class="styleSection">' +
    '<strong>Image Options</strong>' +
    '<div id="imageOptions">' +
    '<div><input type="radio" name="imageOptions" id="imageOptions__1" value="cover" /><label for="imageOptions__1">Fill</label></div>' +
    '<div><input type="radio" name="imageOptions" id="imageOptions__2" value="contain" /><label for="imageOptions__2">Fit</label></div>' +
    '</div>' +
    '</div>' +
    '<div data-style="horizontalAlign" class="styleSection">' +
    '<strong>Horizontal Alignment</strong>' +
    '<div id="horizontalAlign">' +
    '<div><input type="radio" name="horizontalAlign" id="horizontalAlign__1" value="left" /><label for="horizontalAlign__1">Left</label></div>' +
    '<div><input type="radio" name="horizontalAlign" id="horizontalAlign__2" value="center" /><label for="horizontalAlign__2">Center</label></div>' +
    '<div><input type="radio" name="horizontalAlign" id="horizontalAlign__3" value="right" /><label for="horizontalAlign__3">Right</label></div>' +
    '</div>' +
    '</div>' +
    '<div data-style="verticalAlign" class="styleSection">' +
    '<strong>vertical Alignment</strong>' +
    '<div id="verticalAlign">' +
    '<div><input type="radio" name="verticalAlign" id="verticalAlign__1" value="top" /><label for="verticalAlign__1">Top</label></div>' +
    '<div><input type="radio" name="verticalAlign" id="verticalAlign__2" value="center" /><label for="verticalAlign__2">Center</label></div>' +
    '<div><input type="radio" name="verticalAlign" id="verticalAlign__3" value="bottom" /><label for="verticalAlign__3">Bottom</label></div>' +
    '</div>' +
    '</div>' +
    '<div data-style="altText" class="styleSection">' +
    '<strong>Alt Text</strong>' +
    '<div id="altText">' +
    '<input type="text" placeholder="Enter alt text" name="altText" />' +
    '</div>' +
    '</div>' +
    '</div>'
  return markup
}

function styleOptionsInit() {
  var component = $('#styleEditor').parents('[data-component]')
  var textColumns = component.attr('data-text-columns')
  $('#styleEditor #textColumns input[value="' + textColumns + '"]').attr('checked', true)

  // Get swatches
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      firebase
        .database()
        .ref('accounts/' + user.uid + '/reports/' + getParam('rid') + '/' + 'swatches')
        .on('child_added', function (snapshot) {
          var swatches = snapshot.val()

          $.each(swatches, function (k, swatch) {
            //console.log( swatch, k );
            $('#savedColors').append(
              '<div>' +
                '<a href="#" data-color="' +
                swatch +
                '" title="' +
                swatch +
                '" style="background: ' +
                swatch +
                ';"></a>' +
                '<a href="#" class="remove-color" data-value="' +
                swatch +
                '" data-action="remove">X</a>' +
                '</div>',
            )
          })
        })
    }
  })

  // Highlight Image Options
  if (component.attr('data-component') == 'image-bg') {
    var imageOption = component.attr('data-image-size')
    var hAlign = component.attr('data-h-align')
    var vAlign = component.attr('data-v-align')
    $('#styleEditor #imageOptions input[value="' + imageOption + '"]').attr('checked', true)
    $('#styleEditor #horizontalAlign input[value="' + hAlign + '"]').attr('checked', true)
    $('#styleEditor #verticalAlign input[value="' + vAlign + '"]').attr('checked', true)
  }

  // Display alt text value
  if (component.attr('data-component') == 'image') {
    var altTextVal = component.find('img').attr('alt')
    $('#styleEditor #altText input').val(altTextVal)
  }
  if (component.attr('data-component') == 'image-bg') {
    var altTextVal = component.attr('aria-label')
    $('#styleEditor #altText input').val(altTextVal)
  }
}

function colorPickerInit(currentColor) {
  var component = ''
  var currentColor = ''
  var colorPicker = new iro.ColorPicker('#colorPicker', {
    width: 160,
    borderWidth: 0,
    wheelLightness: false,
  })

  colorPicker.on('color:init', function (color) {
    // preset color picker based on heading color
    component = $('#styleEditor').parents('[data-component]')

    var elementColor = component.attr('data-headings-color')

    if (elementColor != undefined) {
      colorPicker.color.hexString = elementColor
      $('#colorInput input').val(elementColor)
    } else {
      colorPicker.color.hexString = '#000000'
      $('#colorInput input').val('#000000')
    }
  })

  colorPicker.on('color:change', function (color) {
    // Update Element Color
    var element = $('#contentSelector input:checked').val()
    component = $('#styleEditor').parents('[data-component]')
    currentColor = color.hexString

    // If colorinput is not focused, update current color
    if (!$('#colorInput input').is(':focus')) {
      $('#colorInput input').val(currentColor)
    }

    // Update Swatch Button
    $('button').attr('data-color', color.hexString)

    // Set Elment Color
    if (element == 'headings') {
      component.css({ '--headingsColor': color.hexString })
    }

    if (element == 'body') {
      component.css({ '--bodyColor': color.hexString })
    }

    if (element == 'background') {
      component.css({ '--backgroundColor': color.hexString })
    }

    // Set Attributes for styleeditor
    component.attr('data-' + element + '-color', color.hexString)
  })

  colorPicker.on(['input:end'], function () {
    //generateReportObject();
    blurUpdate()
  })

  $(document).on('keyup change', '#colorInput input', function () {
    var colorValue = $(this).val()
    colorPicker.color.hexString = colorValue
  })

  $(document).on('change', '#contentSelector input[name="content"]:checked', function () {
    // Read color and set Color Picker
    var element = $(this).val() // current tab
    var elementColor = component.attr('data-' + element + '-color')

    if (elementColor != undefined) {
      colorPicker.color.hexString = elementColor
    } else {
      colorPicker.color.hexString = '#fff'
    }
  })
}

function saveColor() {
  var currentColor = $('#colorInput input').val().replace('#', '')
  var colorArray = []
  // Save color to report database
  $('#savedColors div').each(function () {
    colorArray.push($(this).find('a').first().attr('data-color'))
  })

  //console.log(colorArray);
  if (colorArray.includes('#' + currentColor) == false) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var userID = user.uid
        firebase
          .database()
          .ref('accounts/' + user.uid + '/reports/' + getParam('rid') + '/swatches')
          .push({
            color: '#' + currentColor,
          })
      }
    })
  }
}

$(document).on('click', '.remove-color', function () {
  var rColor = $(this).attr('data-value')
  //alert(rColor);
  // Save color to report database
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var userID = user.uid
      firebase
        .database()
        .ref('accounts/' + user.uid + '/reports/' + getParam('rid') + '/swatches')
        .once('value')
        .then(function (snapshot) {
          //var snapshot = snapshot.val();
          snapshot.forEach(function (ref) {
            //console.log(ref);
            if (ref.val().color == rColor) {
              ref.ref.remove()
            }
          })
        })
    }
  })
})

function useSwatch(color) {
  $('#colorInput input').val(color).change()
}

function removeForeignMarkup() {
  // This is a fix to remove grammarly injected markup
  $('grammarly-extension').remove()
}

var hexDigits = new Array(
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
)

//Function to convert rgb color to hex format
function rgb2hex(rgb) {
  rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
  return '#' + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3])
}

function hex(x) {
  return isNaN(x) ? '00' : hexDigits[(x - (x % 16)) / 16] + hexDigits[x % 16]
}

function addAltText(component, text) {
  componentName = component.attr('data-component')
  if (componentName == 'image') {
    component.find('img').attr('alt', text)
  }
  if (componentName == 'image-bg') {
    component.attr('role', 'img')
    component.attr('aria-label', text)
  }
}

function startPublishing() {
  debugger
  var reportnames = []

  var reportTitle = $('[data-field="reportTitle"]').text() //$("#titleReport").text();

  if (reportTitle == 'New title') {
    //alert('The title must be original')
    var markup =
      '<div class="block  craftLink">' +
      '<h2 style="color: blue;" >Your title report must be a original title, please change it.</h2>' +
      //'<p>Your Title REport Muts be a Original Title, plase change it</p>'+
      '<div class="message"></div>' +
      '</div>'
    $('#modalPublish').html(markup)
  } else {
    $('#modalPublish, #overlay').addClass('active')
    var loading =
      '<div class="reportLink"><div id="loadingIcon" class="fa-3x">' +
      '<i class="fas fa-circle-notch fa-spin"></i>' +
      '</div></div>'
    $('#modalPublish').html(loading)

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const urlAccountReports =
          'https://yearly-api-legacy.herokuapp.com/api/v1/accounts/' +
          user.uid +
          '/get_account_reports'
        user.getIdToken(true).then((idToken) => {
          axios
            .get(urlAccountReports, {
              responseType: 'json',
              headers: { Authorization: idToken },
            })
            .then((json) => {
              var username = json.data.username
              //console.log('From startPublishing username '+username)
              //console.log('From startPublishing reports'+JSON.stringify(json.data.reports))
              $.each(json.data.reports, function (k) {
                //console.log('From startPublishing each k '+JSON.stringify(k))
                reportnames.push(k)
              })

              var reportTitle = $('[data-field="reportTitle"]').text() //$("#titleReport").text();
              reportTitle = reportTitle.replace(/ /g, '-').toLowerCase()

              if (reportnames.includes(reportTitle)) {
                reportTitle = reportTitle + '-' + Math.random().toString(36).substr(2, 4)
              }

              var userName = username.replace(/ /g, '')

              var markup =
                '<div class="reportLink"><div class="craftLink">' +
                '<h1>Create Your Report Link</h1>' +
                '<div class="block-content">' +
                '<p>Publish your report using the button below. Once published, you will be able to continue making edits without affecting your live report.</p>' +
                '<div class="url"><i class="fa fa-lock"></i>yearly.report/from/' +
                '<span  spellcheck="false" data-field="reportusername" data-placeholder="' +
                userName +
                '" class="valid">' +
                userName +
                '</span>' +
                '/<div><span contenteditable="true" id="title-for-publish" spellcheck="false" data-field="reporttitleeditable" data-placeholder="report-title" class="valid">' +
                reportTitle +
                '</span></div></div><br>' +
                '<button>Publish Report</button>' +
                '<div class="message"></div>' +
                '</div>' +
                '</div> </div>'
              $('#modalPublish').html(markup)

              // check report name
              $('.craftLink button').attr('disabled', true)
              var preferredReportname = $('[data-field="reportname"]').text()
              var preferredReportusername = $('[data-field="reportusername"]').text()
              if (reportnames.includes(preferredReportname)) {
                $('[data-field="reportname"]').removeClass('valid')
                $('.craftLink button').attr('disabled', true)
                $('.craftLink .message').html(
                  'You already have a report that exists with this label.',
                )
                $('.craftLink .message').removeClass('hidden')
              } // end if prefeerredReportname

              if (
                /^[a-zA-Z0-9-_ ]*$/.test(preferredReportname) == false ||
                /^[a-zA-Z0-9-_ ]*$/.test(preferredReportusername) == false
              ) {
                //$('[data-field="reportname"]').removeClass('valid');

                if (/^[a-zA-Z0-9-_ ]*$/.test(preferredReportname) == false) {
                  $('[data-field="reportname"]').removeClass('valid')
                  //$('[data-field="reportusername"]').addClass('error');
                }
                if (/^[a-zA-Z0-9-_ ]*$/.test(preferredReportusername) == false) {
                  $('[data-field="reportusername"]').removeClass('valid')
                  $('[data-field="reportusername"]').addClass('error')
                }

                $('.craftLink button').attr('disabled', true)
                $('.craftLink .message').html('No special characters allowed. Dashes are fine.')
                $('.craftLink .message').removeClass('hidden')
              } else {
                $('[data-field="reportname"]').addClass('valid')
                $('.craftLink button').attr('disabled', false)
                $('.craftLink .message').addClass('hidden')
              }
            })
        })
      } //end of if user
    }) //end of fire Auth

    $(document).on('keyup keydown', '[data-field="reportname"]', function (e) {
      if (e.keyCode == 32 || e.keyCode == 13) {
        return false
      } else {
        $('.craftLink button').attr('disabled', true)
        var preferredReportname = $('[data-field="reportname"]').text()
        if (reportnames.includes(preferredReportname)) {
          $('[data-field="reportname"]').removeClass('valid')
          $('.craftLink button').attr('disabled', true)
          $('.craftLink .message').html('You already have a report that exists with this label.')
          $('.craftLink .message').removeClass('hidden')
        } else if (/^[a-zA-Z0-9- ]*$/.test(preferredReportname) == false) {
          $('[data-field="reportname"]').removeClass('valid')
          $('.craftLink button').attr('disabled', true)
          $('.craftLink .message').html('No special characters allowed. Dashes are fine.')
          $('.craftLink .message').removeClass('hidden')
        } else {
          $('[data-field="reportname"]').addClass('valid')
          $('.craftLink button').attr('disabled', false)
          $('.craftLink .message').addClass('hidden')
        }
      }
    })
  }
} //end of startPublishing()

function setupChart(chartID, chartType, labels, data, colors, prefix, suffix) {
  var prefix = prefix
  var suffix = suffix
  var chartType = chartType
  var chartID = chartID
  var lables = labels
  var data = data
  var theHelp = Chart.helpers
  var numItems = labels.length
  var scales = false

  // remove labels and reduce padding on mobile
  if (window.innerWidth <= 900) {
    var floatingLabelDisplay = true
    if (chartType == 'pie' || chartType == 'doughnut') {
      var chartPadding = 30
    } else {
      var chartPadding = 30
    }
  } else {
    var chartPadding = 70
    var floatingLabelDisplay = true
  }

  if (chartType == 'pie' || chartType == 'doughnut') {
    var displayLabels = true
    if ($('[data-chart-id="' + chartID + '"]').width() < 500) {
      displayLabels = true
      chartPadding = 30
    }
  }

  $('[data-chart-id="' + chartID + '"] canvas, .chartjs-size-monitor').remove()
  $('[data-chart-id="' + chartID + '"] .chart').append('<canvas id="' + chartID + '"></canvas>')

  var ctx = document.getElementById(chartID)
    ? document.getElementById(chartID).getContext('2d')
    : null
  if (chartType == 'bar' || chartType == 'line') {
    scales = {
      x: {
        ticks: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return prefix + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + suffix
          },
        },
      },
    }
  }
  var chartOptions = {
    type: chartType,
    animation: false,
    data: {
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: colors, //chroma.scale(['red','blue','green','yellow']).mode('lch').colors(numItems)
          borderWidth: 0,
          fill: true,
        },
      ],
    },
    plugins: [ChartDataLabels],
    options: {
      maintainAspectRatio: false,
      animation: true,
      chartArea: {
        backgroundColor: 'rgba(251, 85, 85, 0.4)',
      },
      layout: {
        padding: {
          left: chartPadding,
          right: chartPadding,
          top: chartPadding,
          bottom: chartPadding,
        },
      },

      scales: scales,

      plugins: {
        datalabels: {
          color: '#000000',
          offset: 7,
          textAlign: 'center',
          display:
            chartType == 'pie' || chartType == 'doughnut' ? displayLabels : floatingLabelDisplay,
          font: {
            size: 10,
          },
          clamp: true,
          anchor: 'end',
          align: 'end',
          rotation: chartType == 'pie' || chartType == 'doughnut' ? -35 : 0,
          formatter: function (value, context) {
            //console.log( value );
            return prefix + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' ' + suffix
          },
        },
        legend: {
          display: false,
          position: 'bottom',
          fullWidth: false,
          labels: {
            fontSize: 16,
            boxWidth: 16,
            padding: 20,
          },
        },
        tooltip: {
          backgroundColor: '#eeeeee',
          titleFontColor: '#000000',
          titleFontSize: 16,
          bodyFontSize: 16,
          xPadding: 20,
          yPadding: 20,
          callbacks: {
            labelTextColor: function (context) {
              return '#000000'
            },
            title: function (context) {
              return context.label
            },
            label: function (context) {
              // var dataset = data['datasets'][0];
              // var percent = Math.round((dataset['data'][tooltipItem['index']] / dataset["_meta"][0]['total']) * 100)
              // return prefix+data['datasets'][0]['data'][tooltipItem['index']].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' '+suffix+' (' + percent + '%)';
              return (
                prefix +
                context.parsed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
                ' ' +
                suffix
              )
            },
            afterLabel: function (tooltipItem, data) {
              //return 'After Label';
            },
          },
        },
      },
    },
  }

  var chart = new Chart(ctx, chartOptions)
  //generateReportObject();
}

function createPollDB(username, report) {
  $('[data-poll-id]').each(function () {
    var poll = $(this)
    var pollID = poll.attr('data-poll-id')
    var choices = []
    var question = poll.find('[data-field="quoteText"]').text()

    poll.find('.choices > div').each(function () {
      var choice = $(this).text()
      choices.push({
        choice: choice,
      })
    })

    var pollObj = {
      question: question,
      chocies: choices,
    }

    firebase
      .database()
      .ref('reports/' + username + '/' + report + '/polls/' + pollID)
      .update(pollObj)

    // console.log( pollID );
    // console.log( pollObj )
    // console.log('XXXXXXXXX');
  })
}

async function getAnalytics(username, report, views = 0) {
  const base_url = 'https://yearly-api-prod.herokuapp.com/api/v1/accounts'
  const urlPollsBase = `${base_url}/${username}/account_reports/${report}/polls`
  var jsonPoll = await axios.get(urlPollsBase, {})
  if (jsonPoll && jsonPoll.data && jsonPoll.data.polls) {
    jsonPoll.data.polls.map((poll) => {
      var choicesHtml = []
      var summaryVotes = 0
      poll.choices.map((item) => {
        summaryVotes += item.votes
      })
      poll.choices.map((item) => {
        choicesHtml.push(`
                        <div>
                            <span>${item.choice}</span>
                            <span>${item.votes}</span>
                            <span class="meter" style="width:${
                              (item.votes / summaryVotes) * 100
                            }%;"></span>
                        </div>
                    `)
      })
      $('#polls .polls').html(`
                    <li>
                        <h4>${poll.question}</h4>
                        <div>${choicesHtml.join('')}</div>
                    </li>
                `)
    })
  }
  $('#views .views').html(views)
  /*
    var polls = [];
    firebase.database().ref('reports/'+ username + '/' + report).once('value').then(function( snapshot ) {
        var snapshot = snapshot.val();
        var views = snapshot.views;
        $.each( snapshot.polls, function( k, v){
            // console.log(v.choices);
            var choices = [];
            var totalTally = 0;
            $.each( v.chocies, function( k2, v2){
                if( v2.tally ){
                    tally = v2.tally;
                } else {
                    tally = 0
                }
                totalTally+=tally;
                
                var choiceMarkup = (
                    '<div><span>'+v2.choice+'</span><span>'+tally+'</span><span class="meter" style="width:'+(tally/totalTally)*100+'%;"></span></div>'
                );
                choices.push( choiceMarkup );
            });
            
            var pollMarkup = (
                '<li>'+
                    '<h4>'+v.question+'</h4>'+
                    '<div>'+
                    choices.join('')+
                    '</div>'+
                '</li>'
            );
            polls.push( pollMarkup );
        });
        var pollList = polls.join(' ');
        $('#polls .polls').html( pollList );
        $('#views .views').html( views );
    });
    */
}

function getAccounts() {
  $('.accountList').empty()
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      firebase
        .database()
        .ref('/accounts')
        .once('value')
        .then(
          function (snapshot) {
            var snapshot = snapshot.val()
            $.each(snapshot, function (key, val) {
              if (val.reports) {
                var reportDetails = []
                $.each(val.reports, function (key2, val2) {
                  if (val2.reportTitle == '') {
                    val2.reporttitle = 'Untitled'
                  }
                  if (val2.reportYear == '') {
                    val2.reportYear = 'No Year'
                  }
                  reportDetails.push(
                    // '<a href="builder?rid='+key2+'&uid='+key+'" class="bg" style="background: url('+val2.reportCover+') no-repeat center center / cover;">'+
                    '<a href="#" class="bg" style="background: url(' +
                      val2.reportCover +
                      ') no-repeat center center / cover;">' +
                      '<span>' +
                      val2.reportTitle +
                      '</span>' +
                      '<span>' +
                      val2.reportYear +
                      '</span>' +
                      '<span>' +
                      val2.reportStatus +
                      '</span>' +
                      '</a>',
                  )
                })

                $('.accountList').append(
                  '<div class="row">' +
                    '<div>' +
                    '<span>' +
                    val.organization +
                    '</span>' +
                    '<span>' +
                    val.name +
                    ' (' +
                    val.email +
                    ')</span>' +
                    '</div>' +
                    '<div>' +
                    reportDetails.join('') +
                    '</div>' +
                    '</div>',
                )
              }
            })
            console.log(snapshot)
          },
          function (error) {
            if (error) {
              console.error(error)
            } else {
              console.log('Customer Accounts Fetched')
            }
          },
        )
    }
  })
}

function runTour(step) {
  var lastStep = 5
  var markup

  console.log(step)

  $('[data-tooltip]').remove()
  $('*').removeClass('halo')

  if (step == 1) {
    markup =
      '<div data-tooltip="' +
      step +
      '"><p>This is your report\'s cover page and the first thing readers will see when viewing your report. Start by entering a title and adding a <strong><i class="fa fa-image"></i> Cover Image</strong> to establish a strong first impression.</p><a href="#" data-next="">Next</a> <div class="pos">' +
      step +
      ' of ' +
      lastStep +
      '</div></div>'
    $('[data-component="opening-cover"] .container').append(markup)
    $('h1').addClass('halo')
  }

  if (step == 2) {
    markup =
      '<div data-tooltip="' +
      step +
      '"><p>To start adding text, images, and other features to your report, simply use any of the <strong>Content</strong> options below.</p><a href="#" data-next="">Next</a> <div class="pos">' +
      step +
      ' of ' +
      lastStep +
      '</div></div>'
    $('[data-block-type="contentBlocks"]').click()
    $('[data-page="opening"] .pageContents').after(markup)
    $('html, body').animate(
      {
        scrollTop: $('[data-page="opening"] .layouts').offset().top - $(window).height() / 2,
      },
      600,
      'swing',
    )
    $('.layouts').addClass('halo')
  }

  if (step == 3) {
    markup =
      '<div data-tooltip="' +
      step +
      '"><p>You may also use preset <strong>Layouts</strong> to create interesting content mashups.</p><a href="#" data-next="">Next</a> <div class="pos">' +
      step +
      ' of ' +
      lastStep +
      '</div></div>'
    $('[data-block-type="layoutBlocks"]').click()
    $('[data-page="opening"] .pageContents').after(markup)
    $('html, body').animate(
      {
        scrollTop: $('[data-page="opening"] .layouts').offset().top - $(window).height() / 2,
      },
      600,
      'swing',
    )
    $('.layouts').addClass('halo')
  }

  if (step == 4) {
    markup =
      '<div data-tooltip="' +
      step +
      '"><p>Choose from a wide variety of <strong><i class="fa fa-font"></i> Fonts</strong> to set the tone of your message.</p><a href="#" data-next>Next</a> <div class="pos">' +
      step +
      ' of ' +
      lastStep +
      '</div></div>'
    $('[data-block-type="contentBlocks"]').click()
    $('.leftBar').append(markup)
    $('[data-action="openThemeEditor"]').addClass('halo')
  }

  if (step == 5) {
    markup =
      '<div data-tooltip="' +
      step +
      '"><p>Once you\'ve finished creating your report <strong><i class="fa fa-eye"></i> Preview</strong> to review and <strong><i class="fa fa-feather-alt"></i> Publish</strong> once you\'re ready to share.</p><a href="#" data-next>Close</a> <div class="pos">' +
      step +
      ' of ' +
      lastStep +
      '</div></div>'
    $('[data-block-type="contentBlocks"]').click()
    $('.leftBar').append(markup)
    $('[data-action="publish"], [data-action="preview"]').addClass('halo')
  }

  // Hide/Reveal Tooltip
  $('[data-tooltip]').removeClass('active')
  setTimeout(function () {
    $('[data-tooltip]').addClass('active')
  }, 100)

  // Check if last Tooltip
  if (step > lastStep) {
    $('[data-tooltip]').removeClass('active')
    // } */
    // if (step > lastStep) {
    //     $('[data-tooltip]').removeClass('active');
    //     var path = 'https://yearly-2.vercel.app/builder' + '?rid=' + getParam('rid')

    //     setTimeout(() => {
    //         window.location.href = path;
    // }, 800);
  } else {
    step++
  }
}

function checkSubscriptionStatus() {
  var urlwp = 's/https://yearly.report/wp-content/themes/yearly/function'
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const url = 'https://yearly-api-prod.herokuapp.com/api/v1/accounts/' + user.uid
      user
        .getIdToken(true)
        .then(function (idToken) {
          axios
            .get(url, {
              responseType: 'json',
              headers: { Authorization: idToken },
            })
            .then((data) => {
              //console.log('from checkSus '+JSON.stringify(data))
              var req = 'customer'
              var cid = data.customerID
                ? data.customerID
                : data.data.customerID
                ? data.data.customerID
                : null
              var userID = user.uid
              var account = data && data.data ? data.data : {}

              if (data.status == 200) {
                if ($('input[name="organization"]').length)
                  $('input[name="organization"]').val(
                    account.organization ? account.organization : '',
                  )
                if ($('textarea[name="organizationAddress"]').length)
                  $('textarea[name="organizationAddress"]').html(
                    account.organizationAddress ? account.organizationAddress : '',
                  )
                if ($('input[name="organizationTwitter"]').length)
                  $('input[name="organizationTwitter"]').val(
                    account.organizationTwitter ? account.organizationTwitter : '',
                  )
                if ($('input[name="organizationFacebook"]').length)
                  $('input[name="organizationFacebook"]').val(
                    account.organizationFacebook ? account.organizationFacebook : '',
                  )
                if ($('input[name="organizationInstagram"]').length)
                  $('input[name="organizationInstagram"]').val(
                    account.organizationInstagram ? account.organizationInstagram : '',
                  )
                if ($('input[name="organizationLinkedIn"]').length)
                  $('input[name="organizationLinkedIn"]').val(
                    account.organizationLinkedIn ? account.organizationLinkedIn : '',
                  )
                if ($('input[name="organizationYoutube"]').length)
                  $('input[name="organizationYoutube"]').val(
                    account.organizationYoutube ? account.organizationYoutube : '',
                  )
                if ($('input[name="organizationPinterest"]').length)
                  $('input[name="organizationPinterest"]').val(
                    account.organizationPinterest ? account.organizationPinterest : '',
                  )
                if ($('input[name="holder"]').length)
                  $('input[name="holder"]').val(account.username ? account.username : '')

                if (data.data.subscription_status == 'free') {
                  localStorage.setItem('subscription_status', 'free')
                  $('#modalUploadType').append(
                    ' <a href="#" id="openImageMyKitPics" data-action="openImageMyKitPics"><i class="fa fa-images"></i> Add from your Kit <img class="star-free-account" src="../assets/img/icons/star.png" alt="info" /> </a><a href="#" data-action="closeModal">Cancel</a>',
                  )

                  //$("#builderActions-leftBar" ).append('<li><a id="goToBackDashboard" href=""><i class="fas fa-receipt"></i></a><span>You have a pay account</span></li>');
                  //$('#free-access').css("class", 'active');
                  $('.store-images .wrap-title .icon').append(
                    '<img src="../assets/img/icons/icon-info.svg" alt="info"> <p>Save your brand images and easily access them as you design</p>',
                  )
                  $('.brand-colors .wrap-title .icon').append(
                    '<img src="../assets/img/icons/icon-info.svg" alt="info">  <p>Save your brand colors and easily access them as you design</p>',
                  )
                  $('.brand-fonts .wrap-title .icon').append(
                    '<img src="../assets/img/icons/icon-info.svg" alt="info">  <p>Save your brand fonts and easily access them as you design</p>',
                  )

                  var element = document.getElementById('free-access')
                  if (element) {
                    element.classList.add('active')
                  }

                  //$("#brand-kit").children().attr("disabled","disabled");
                  //$(".add").hide();
                  var inputStore = document.getElementById('input-store-images')
                  var imgAdd = document.getElementById('image-add')
                  var palette1 = document.getElementById('input-store-palette--1')
                  var paletteColor = document.getElementById('input-color-palette--1')
                  var editTitlepalette = document.getElementById('edit-title-palette')
                  var addColors = document.getElementById('add-colors')
                  //var spanStore = $( "#input-store-images" ).parent().get( 0 ).children[0];
                  if (inputStore != null) {
                    inputStore.disabled = true
                  }
                  if (palette1 != null) {
                    palette1.disabled = true
                    palette1.setAttribute('onclick', 'upgradeAccount()')
                  }
                  if (paletteColor != null) {
                    paletteColor.disabled = true
                    paletteColor.setAttribute('onclick', 'upgradeAccount()')
                  }
                  if (imgAdd != null) {
                    imgAdd.disabled = true
                    imgAdd.setAttribute('onclick', 'upgradeAccount()')
                  }

                  if (editTitlepalette != null) {
                    editTitlepalette.disabled = true
                    editTitlepalette.setAttribute('onclick', 'upgradeAccount()')
                  }
                  if (addColors != null) {
                    addColors.disabled = true
                    addColors.setAttribute('onclick', 'upgradeAccount()')
                  }
                }

                if (data.data.subscription_status == 'paid') {
                  localStorage.setItem('subscription_status', 'paid')

                  $('#modalUploadType').append(
                    ' <a href="#" id="openImageMyKitPics" data-action="openImageMyKitPics"><i class="fa fa-images"></i> Add from your Kit  </a><a href="#" data-action="closeModal">Cancel</a>',
                  )

                  $('#pro-subscription').css('class', 'active')
                  $('.store-images .wrap-title .icon').append(
                    '<img src="../assets/img/icons/icon-info.svg" alt="info"> <p>Save your brand images and easily access them as you design</p>',
                  )
                  $('.brand-colors .wrap-title .icon').append(
                    '<img src="../assets/img/icons/icon-info.svg" alt="info"> <p>Save your brand colors and easily access them as you design</p>',
                  )
                  $('.brand-fonts .wrap-title .icon').append(
                    '<img src="../assets/img/icons/icon-info.svg" alt="info"> <p>Save your brand fonts and easily access them as you design</p>',
                  )

                  var element = document.getElementById('pro-subscription')
                  if (element) element.classList.add('active')

                  getSuscrited()
                }
              } //end of status ok

              if (cid) {
                $.ajax({
                  url: urlwp,
                  data: {
                    req: req,
                    cid: cid,
                  },
                  dataType: 'json',
                  success: function (data) {
                    var paymentSource = data.sources.data[0]
                    var subscription = data.subscriptions.data[0]

                    // Display Subscription Details
                    // var paymentSourceMarkup = (
                    //     '<div>'+
                    //         '<div>'+
                    //             '<div data-field="cardNum">'+paymentSource.brand+' ****'+paymentSource.last4+' '+paymentSource.exp_month+'/'+paymentSource.exp_year+'</div>'+
                    //             '<a href="#" data-action="updatePayment">Update Payment Details</a>'+
                    //         '</div>'+
                    //     '</div>'
                    // );
                    // $('.paymentSource').html( paymentSourceMarkup );

                    // Display Payment Source
                    var subscriptionMarkup =
                      '<div>' +
                      '<div>' +
                      '<div data-field="subPrice" style="font-weight: 600;">$' +
                      subscription.plan.amount / 100 +
                      '.00 Billed ' +
                      subscription.plan.nickname +
                      '</div>' +
                      '<div data-field="cardNum">' +
                      paymentSource.brand +
                      ' ****' +
                      paymentSource.last4 +
                      ' ' +
                      paymentSource.exp_month +
                      '/' +
                      paymentSource.exp_year +
                      ' <a href="https://yearly.report/wp-content/themes/yearly/functions/updateCard.php?cid=' +
                      cid +
                      '" data-action="updatePayment">Update</a></div>' +
                      '</div>' +
                      '</div>'
                    $('.subscription').html(subscriptionMarkup)

                    // If subscription is past due, check last paymewnt status, display failure message, and suspend account
                    if (subscription.status == 'past_due') {
                      checkLastPayment(cid)
                      suspendAccount(userID, true)
                    } else {
                      suspendAccount(userID, false)
                    }
                  },
                  error: function (error) {
                    console.log(error)
                    $('.paymentSource').html('You have no cards on file.')
                    $('.subscription').html('Guest Account')
                  },
                })
              }
            })
            .catch(function (err) {
              console.log(err)
            })
        })
        .catch(function (error) {
          console.log(error)
        })
      /*
            firebase.database().ref('accounts/' + user.uid ).once('value').then( function( data ){
                var req = 'customer';
                var cid = data.val().customerID;
                var userID = user.uid;
                $.ajax({
                    url: url,
                    data: {
                        req: req,
                        cid: cid
                    },
                    dataType: 'json',
                    success: function( data ) {
                        var paymentSource = data.sources.data[0];
                        var subscription  = data.subscriptions.data[0];

                        // Display Subscription Details
                        // var paymentSourceMarkup = (
                        //     '<div>'+
                        //         '<div>'+
                        //             '<div data-field="cardNum">'+paymentSource.brand+' ****'+paymentSource.last4+' '+paymentSource.exp_month+'/'+paymentSource.exp_year+'</div>'+
                        //             '<a href="#" data-action="updatePayment">Update Payment Details</a>'+
                        //         '</div>'+
                        //     '</div>'
                        // );
                        // $('.paymentSource').html( paymentSourceMarkup );
                        
                        // Display Payment Source
                        var subscriptionMarkup = (
                            '<div>'+
                                '<div>'+
                                    '<div data-field="subPrice" style="font-weight: 600;">$'+(subscription.plan.amount/100)+'.00 Billed '+subscription.plan.nickname+'</div>'+
                                    '<div data-field="cardNum">'+paymentSource.brand+' ****'+paymentSource.last4+' '+paymentSource.exp_month+'/'+paymentSource.exp_year+' <a href="https://yearly.report/wp-content/themes/yearly/functions/updateCard.php?cid='+cid+'" data-action="updatePayment">Update</a></div>'+
                                '</div>'+
                            '</div>'
                        );
                        $('.subscription').html( subscriptionMarkup );

                        // If subscription is past due, check last paymewnt status, display failure message, and suspend account
                        if( subscription.status == 'past_due' ){
                            checkLastPayment( cid );
                            suspendAccount( userID, true );
                        } else {
                            suspendAccount( userID, false );
                        }

                    },
                    error: function( error ) {
                        console.log( error );
                        $('.paymentSource').html('You have no cards on file.');
                        $('.subscription').html( 'Guest Account' );
                    }
                });
            });*/
    }
  })
}

function getSuscrited() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      user
        .getIdToken(true)
        .then((idToken) => {
          //console.log(idToken + JSON.stringify(data))
          const getSus =
            'https://yearly-api-prod.herokuapp.com//api/v1/accounts/' + user.uid + '/subscriptions'
          const token = idToken
          axios
            .get(getSus, {
              headers: { Authorization: token },
            })
            .then((json) => {
              //console.log('data from ajaxinsertReport '+ json )
              if (json.status == 200) {
                //console.log("Insert to new endpoint ok "+JSON.stringify(json ));
                //alert("Insert to new endpoint ok "+ JSON.stringify(json ));
                //console.log('Get Sus:'+ JSON.stringify(json))
                if (json.data.subscription.status == 'canceled') {
                  $('#unsusbtn').replaceWith(
                    `<a id="unsusbtn" class="unsuscribe2">UNSUBSCRIBED</a>`,
                  )
                }
              }

              if ((json.status = !200)) {
                //console.log("Insert to new endpoint ok "+JSON.stringify(json ));
                //alert("Insert to new endpoint ok "+ JSON.stringify(json ));

                console.log('Get Sus:' + JSON.stringify(json))
              }
            })
            .catch(function (error) {
              console.log('Unsiscribe: ' + error)
              /*$('#modalPublish, #overlay').addClass('active');
                        $( "#modalPublish .modalContainer h3").text( 'Error');
                              var markup = (
                                   
                                `<div class="block craftLink">
                            <!-- bloque de titulo -->
                            <div class="block-title bg-blue">
                                <h3>${error}</h3>
                            </div>`
                                );
                            $('#modalPublish').html(markup);*/
            })
        })
        .catch(function (error) {
          console.log('Unsiscribe: ' + error)
          alert(JSON.stringify(error))
        })
    }
  })
}

function checkLastPayment(cid) {
  var url = 'https://yearly.report/wp-content/themes/yearly/functions/'
  var req = 'charges'
  var cid = cid
  $.ajax({
    url: url,
    data: {
      req: req,
      cid: cid,
    },
    dataType: 'json',
    success: function (data) {
      var lastChargeAttempt = data.data[0]
      if (lastChargeAttempt.failure_message != 'null') {
        var messageMarkup =
          '<div class="message">' +
          'Your subscription is past due. Reason: ' +
          lastChargeAttempt.failure_message +
          '<div>' +
          // '<a href="#" data-action="retryCard">Retry Card</a>'+
          '<a href="https://yearly.report/wp-content/themes/yearly/functions/updateCard.php?cid=' +
          cid +
          '" data-action="updatePayment">Update Payment Details</a>' +
          '</div>' +
          '</div>'
        $('.subscription').append(messageMarkup)
        $('#reports').prepend(
          '<p class="message">There was an issue with your last payment. <a href="#/account" style="text-decoration: underline;">View Reason</a></p>',
        )

        // disable reports
        $('#reports > div').addClass('disabled')
      }
      console.log(data)
    },
    error: function (error) {
      console.error(error)
    },
  })
}

function suspendAccount(uid, answer) {
  if (answer == true) {
    firebase
      .database()
      .ref('accounts/' + uid)
      .update({
        access: 'suspended',
      })
  } else {
    firebase
      .database()
      .ref('accounts/' + uid)
      .update({
        access: 'granted',
      })
    $('#reports .message, #billingDetails .message').remove()
  }
}

function enableContactPage() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      firebase
        .database()
        .ref('/accounts/' + user.uid)
        .once('value')
        .then(function (snapshot) {
          var snapshot = snapshot.val()

          var social = []

          // Check for social profiles
          if (snapshot.organizationTwitter) {
            social.push(
              '<a target="_blank" href="' +
                snapshot.organizationTwitter +
                '"><i class="fab fa-twitter"></i></a>',
            )
          }

          if (snapshot.organizationFacebook) {
            social.push(
              '<a target="_blank" href="' +
                snapshot.organizationFacebook +
                '"><i class="fab fa-facebook-f"></i></a>',
            )
          }

          if (snapshot.organizationInstagram) {
            social.push(
              '<a target="_blank" href="' +
                snapshot.organizationInstagram +
                '"><i class="fab fa-instagram"></i></a>',
            )
          }

          if (snapshot.organizationLinkedIn) {
            social.push(
              '<a target="_blank" href="' +
                snapshot.organizationLinkedIn +
                '"><i class="fab fa-linkedin-in"></i></a>',
            )
          }

          if (snapshot.organizationYoutube) {
            social.push(
              '<a target="_blank" href="' +
                snapshot.organizationYoutube +
                '"><i class="fab fa-youtube"></i></a>',
            )
          }

          if (snapshot.organizationAddress) {
            address = snapshot.organizationAddress.replace(/\n/g, '<br>')
          } else {
            address = 'Enter Street Address<br>City, State Zip<br>Phone Number'
          }

          var markup =
            '<article data-page="contact">' +
            '<header data-component="cover" data-controls="background,visibility" style="background: url(../img/cover4.jpeg) no-repeat center center / cover;">' +
            '<div class="container">' +
            '<div>' +
            '<div class="img">' +
            '<div class="sizeSlider"><div data-size="10" data-action="changeSize"></div><span class="val">10%</span></div>' +
            '<a href="#" data-action="controlAddImage">+ Add Logo</a>' +
            '</div>' +
            '<h1 style="display: none;">Contact</h1>' +
            '<div data-field="organizationAddress" contenteditable>' +
            address +
            '</div>' +
            '<div class="socialProfiles">' +
            social.join(' ') +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="opacitySlider"><div data-opacity="10" data-action="changeOpacity"></div><span class="val">10%</span></div>' +
            '</header>' +
            '<div class="pageContents"></div>' +
            '<div data-tooltip="2"><p>To start adding content to your report, simply use any of the content and layout blocks in the tool bar below.</p><a href="#" data-next>Next</a></div>' +
            '</article>'
          $('#reportDetails').append(markup)

          getControls()
          newgetPageList()
          //getPageList();
          enableEditor()
        })
    }
  })
}

function runReportUpdates() {
  //  Updates to add remove page feature to Boca reports
  var removePageControlExists = true
  $('[data-page="generic"]').each(function () {
    if ($(this).find('[data-action="removePage"]').length == 0) {
      removePageControlExists = false
      var currentControls = $(this).find('header').attr('data-controls').replace(',removePage', '')
      $(this)
        .find('header')
        .attr('data-controls', currentControls + ',removePage')
    }
  })

  // if a remove page controls was missing, show dialog to instruct user to reload page.
  if (removePageControlExists == false) {
    if (
      confirm(
        'You are using an outdated report builder. Click OK or refresh this page to update to the latest version.',
      )
    ) {
      location.reload()
    }
  }

  //  Updates pages with custom section title inputs
  if ($('[data-toc-label]').length == 0) {
    $('[data-page]').prepend(
      '<div data-toc-label><input type="text" placeholder="Enter custom section title" /> <span><i class="fa fa-info-circle"></i><span data-infotip>This section title will be used in your report\'s table of contents.</span></span></div>',
    )
  }

  //  Update to staff module
  $('[data-component="staff"]').attr('data-controls', 'move,remove,clone,layoutToggle,styleEditor')
  $('[data-component="staff"] .container > div').addClass('staffItem')
  if ($('[data-component="staff"] .staffItem [data-action="removeItem"]').length == 0) {
    $('[data-component="staff"] .staffItem').append(
      '<a href="#" data-action="removeItem"><i class="fa fa-times"></i></a>',
    )
  }
  if ($('[data-component="staff"] .staffItem [data-action="moveItem"]').length == 0) {
    $('[data-component="staff"] .staffItem').append(
      '<a href="#" data-action="moveItem"><i class="fa fa-arrows-alt"></i></a>',
    )
  }

  //  Updates to image-bg module TODO
  $('[data-component="image-bg"]').attr(
    'data-controls',
    'move,remove,addImage,textToggle,styleEditor',
  )
  if ($('[data-component="image-bg"] .textOverlay').length == 0) {
    $('[data-component="image-bg"]').append(
      '<div class="textOverlay">' +
        '<div class="opacitySlider"><div data-opacity="50" data-action="changeOpacity"></div><span class="val">50%</span></div>' +
        '<div contenteditable>Enter text...</div>' +
        '</div>',
    )
  }

  //  Updates to Contact Page
  $('[data-page="contact"] header').attr('data-controls', 'background,visibility')

  // Insert size slider if it does not exist.
  if ($('[data-page="contact"] header .img .sizeSlider').length == 0) {
    $('[data-page="contact"] header .img').prepend(
      '<div class="sizeSlider"><div data-size="10" data-action="changeSize"></div><span class="val">10%</span></div>',
    )
  }
}

function loadBrandFonts(input_selector = '', valorEmpty = '', valorType = 'title') {
  var headingFonts = [
    'Alfa Slab One',
    'Prata',
    'Raleway',
    'Playfair Display',
    'Quicksand',
    'Anton',
    'Josefin Sans',
    'Abril Fatface',
    'Questrial',
    'Amatic SC',
    'Cinzel',
    'Quattrocento',
    'Suez One',
    'Six Caps',
    'Staatliches',
    'Montserrat',
    'McLaren',
    'Merriweather',
    'Poppins',
    'Big Shoulders Display',
    'Permanent Marker',
    'Cormorant Garamond',
    'Alegreya Sans SC',
    'Yeseva One',
    'DM Serif Text',
    'Darker Grotesque',
    'Fahkwang',
    'Wire One',
    'Ubuntu',
    'Times New Roman',
    'Open Sans',
    'Bitter',
    'Noto Serif',
  ]
  var bodyFonts = [
    'Prata',
    'Raleway',
    'Playfair Display',
    'Quicksand',
    'Josefin Sans',
    'Questrial',
    'Quattrocento',
    'Montserrat',
    'McLaren',
    'Merriweather',
    'Poppins',
    'Cormorant Garamond',
    'Alegreya Sans SC',
    'Yeseva One',
    'DM Serif Text',
    'Darker Grotesque',
    'Fahkwang',
    'Ubuntu',
    'Times New Roman',
    'Open Sans',
    'Bitter',
    'Source Sans Pro',
  ]

  if (valorType === 'subtitle') headingFonts = bodyFonts

  var fontPrimaryMarkupArr = []
  fontPrimaryMarkupArr.push(`
        <input type="text" class="${input_selector.replace('.', '')}" style="display: none;">
        <div id="fontSelect-${input_selector.replace(
          '.',
          '',
        )}" class="font-select custom-dw-font-select" data-input-selector="${input_selector}">
            <a>
                <span>${valorEmpty}</span>
                <div><b></b></div>
            </a>
            <div class="fs-drop" style="display: none;">
                <ul class="fs-results">
    `)
  $.each(headingFonts, function (key, fontName) {
    if (
      fontName == 'Wire One' ||
      fontName == 'Darker Grotesque' ||
      fontName == 'Cormorant Garamond' ||
      fontName == 'Big Shoulders Display' ||
      fontName == 'Six Caps' ||
      fontName == 'Amatic SC'
    ) {
      fontSize = 'font-size: 2rem;'
    } else {
      fontSize = ''
    }
    fontPrimaryMarkupArr.push(
      `<li data-value="${fontName.replaceAll(
        ' ',
        '+',
      )}" style="font-family: ${fontName}; ${fontSize}" class="">${fontName}</li>`,
    )
  })
  fontPrimaryMarkupArr.push(`
                </ul>
            </div>
        </div>
    `)
  var fontPrimaryMarkup = fontPrimaryMarkupArr.join('')
  if ($(input_selector).length) {
    var $inputParent = $(input_selector).parent()
    $inputParent.empty()
    $inputParent.append(`<input type="text" class="${input_selector.replace('.', '')}"/>`)
    $inputParent.html(fontPrimaryMarkup)
  }
}

function makeModalColor($element = null) {
  if ($('#styleEditor').length) $('#styleEditor').remove()
  $element.append(
    '<div id="styleEditor" class="brandkit-color">' +
      '<div id="colorInput">' +
      '<input type="text" maxlength="7" placeholder="Enter Color Code" />' +
      '<button onclick="brandKit.selectBrandKitColor(this)">+</button>' +
      '</div>' +
      '<div id="colorPicker"></div>' +
      '</div>',
  )

  var component = ''
  var currentColor = ''
  var colorPicker = new iro.ColorPicker('#colorPicker', {
    width: 160,
    borderWidth: 0,
    wheelLightness: false,
  })
  colorPicker.on('color:init', function (color) {
    // preset color picker based on heading color
    component = $('#styleEditor').parents('[data-component]')
    var elementColor = component.attr('data-headings-color')
    if (elementColor != undefined) {
      colorPicker.color.hexString = elementColor
      $('#colorInput input').val(elementColor)
    } else {
      colorPicker.color.hexString = '#000000'
      $('#colorInput input').val('#000000')
    }
  })
  colorPicker.on('color:change', function (color) {
    currentColor = color.hexString
    // If colorinput is not focused, update current color
    $('#colorInput input').val(currentColor)
    /*
        if( !$('#colorInput input').is(":focus") ){
            $('#colorInput input').val(currentColor);
        }
        */
  })
  colorPicker.on(['input:end'], function () {
    //generateReportObject();
  })
  $(document).on('keyup change', '#colorInput input', function () {
    var colorValue = $(this).val()
    colorPicker.color.hexString = colorValue
  })
  $(document).on('change', '#contentSelector input[name="content"]:checked', function () {
    // Read color and set Color Picker
    var element = $(this).val() // current tab
    var elementColor = component.attr('data-' + element + '-color')

    if (elementColor != undefined) {
      colorPicker.color.hexString = elementColor
    } else {
      colorPicker.color.hexString = ''
    }
  })
}

var brandKit = {
  apiUrl: 'https://yearly-api-prod.herokuapp.com/api/v1',
  stripe_public: 'pk_live_URcbaqAxqQKIkB2Uwvr2r5e000HFBJOQCW',
  stripe_private: 'sk_live_Xyj825JeEFvrDDmWXbADP62500pmZmQ8i3',
  stripeEl: null,
  cardStripe: null,
  apiRequest: async (
    _method = 'GET',
    _pathName = '',
    _headers = {},
    _body = null,
    _isBodyFormatted = false,
    _isHeaderUnactive = false,
  ) => {
    var that = this
    if (typeof _headers['Content-Type'] === 'undefined' && !_isHeaderUnactive)
      _headers['Content-Type'] = 'application/json'
    const dataRequest = {
      method: _method, // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: _headers,
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    }
    if (_body) {
      if (_isBodyFormatted) dataRequest.body = _body
      else dataRequest.body = JSON.stringify(_body)
    }
    const urlRequest =
      _pathName.includes('http://') || _pathName.includes('https://')
        ? _pathName
        : that.brandKit.apiUrl + _pathName
    const bkres = await fetch(`${urlRequest}`, dataRequest)
    return bkres.status == 201 || bkres.status == 204 ? { result: bkres.ok } : bkres.json()
  },
  capitalize: (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  },
  maskBrandKitBlock: (show = false, $element = null) => {
    if (show) {
      if ($element) {
        $('.mask-block').remove()
        $element.prepend(`<div class="mask-block"><div></div></div>`)
      }
    } else {
      setTimeout(() => {
        var currentTime = new Date()
        var timeHour = currentTime.getHours().toString().padStart(2, '0')
        var timeMinute = currentTime.getMinutes().toString().padStart(2, '0')
        var timeSecond = currentTime.getSeconds().toString().padStart(2, '0')
        var timeAMPM = 'am'
        if (parseInt(timeHour) >= 12) timeAMPM = 'pm'
        if (parseInt(timeHour) > 12)
          timeHour = (parseInt(timeHour) - 12).toString().padStart(2, '0')
        if ($('.saveIndicator').length) $('.saveIndicator').remove()
        $('body').prepend(
          `<div class="saveIndicator active">Saved ${timeHour}:${timeMinute}:${timeSecond} ${timeAMPM}</div>`,
        )
        $('.mask-block').remove()
        setTimeout(() => {
          $('.saveIndicator').removeClass('active')
        }, 4500)
      }, 800)
    }
  },
  getBrandKit: async (_token, uid) => {
    var that = this
    return that.brandKit.apiRequest('GET', `/accounts/${uid}/brand_kits`, { Authorization: _token })
  },
  getSubscriptionData: async (_token, uid) => {
    var that = this
    return that.brandKit.apiRequest('GET', `/accounts/${uid}/subscriptions`, {
      Authorization: _token,
    })
  },
  getPaymentMethodData: async (_token, uid) => {
    var that = this
    return that.brandKit.apiRequest('GET', `/accounts/${uid}/payment_methods`, {
      Authorization: _token,
    })
  },
  updateBrandKit: async (dataApi, block = '', method = 'PUT', callback = null) => {
    var that = this
    if (!localStorage.getItem('datapage_brandkit')) top.location.reload()

    var validSession = await that.brandKit.validLoginSession()
    if (!validSession) {
      localStorage.removeItem('UserLogged')
      window.location.href = '/'
      return
    }

    let pathApi = ''
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        var _token = await user.getIdToken(true)
        var bkd = JSON.parse(localStorage.getItem('datapage_brandkit'))
        switch (block) {
          case 'images':
            pathApi = `/accounts/${user.uid}/brand_kits/${bkd.id}/purge`
            break
          case 'colors':
            pathApi = `/accounts/${user.uid}/brand_kits/${bkd.id}`
            break
          case 'fonts':
            pathApi = `/accounts/${user.uid}/brand_kits/${bkd.id}/fonts`
            break
        }
        var brandKitUpd = await that.brandKit.apiRequest(
          method,
          pathApi,
          { Authorization: _token },
          dataApi,
        )
        if (typeof callback === 'function') callback(brandKitUpd)
        else {
          if (brandKitUpd && brandKitUpd.result)
            localStorage.removeItem('datapage_brandkit'),
              that.brandKit.loadDataInit(_token, user.uid)
          that.brandKit.maskBrandKitBlock(false)
        }
      }
    })
  },
  uploadBrandKitFile: async (fileAttachment, type = '', itemId = '') => {
    var that = this
    if (!localStorage.getItem('datapage_brandkit')) top.location.reload()

    var validSession = await that.brandKit.validLoginSession()
    if (!validSession) {
      localStorage.removeItem('UserLogged')
      window.location.href = '/'
      return
    }

    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        var _token = await user.getIdToken(true)
        var _lastPath = ''
        var _typeAttach = ''
        var headers = {
          Authorization: _token,
        }
        switch (type) {
          case 'images':
            _typeAttach = 'image'
            _lastPath = '/images'
            break
          case 'fonts':
            _typeAttach = 'file'
            _lastPath = `/fonts/${itemId}/file`
            break
        }
        const formData = new FormData()
        formData.append(_typeAttach, fileAttachment)
        var bkd = JSON.parse(localStorage.getItem('datapage_brandkit'))
        var urlPath = `/accounts/${user.uid}/brand_kits/${bkd.id}${_lastPath}`
        var brandKitUpd = await that.brandKit.apiRequest(
          'PUT',
          urlPath,
          headers,
          formData,
          true,
          true,
        )
        if (brandKitUpd && brandKitUpd.result)
          localStorage.removeItem('datapage_brandkit'), that.brandKit.loadDataInit(_token, user.uid)
        that.brandKit.maskBrandKitBlock(false)
      }
    })
  },
  loadDataPage: async () => {
    var that = this
    var datapage_brandkit = null
    if (localStorage.getItem('datapage_brandkit'))
      datapage_brandkit = JSON.parse(localStorage.getItem('datapage_brandkit'))
    if (
      datapage_brandkit &&
      Math.round((new Date().getTime() - datapage_brandkit.dateUpdate) / (1000 * 60 * 60)) <= 1
    ) {
      // if (datapage_brandkit.images.length > 4)
      //     $('.images-grid .slide').slick();
      that.brandKit.renderBrandKitPage(datapage_brandkit)
    } else {
      firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
          var token = await user.getIdToken(true)
          that.brandKit.loadDataInit(token, user.uid)
        }
      })
    }
  },
  loadDataAccount: async () => {
    var that = this
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        var token = await user.getIdToken(true)
        var subscriptionData = await that.brandKit.getSubscriptionData(token, user.uid)
        var paymentMethod = await that.brandKit.getPaymentMethodData(token, user.uid)
        if (
          $('.pro-subscription .header-payment-details').length &&
          subscriptionData &&
          subscriptionData.subscription &&
          paymentMethod &&
          paymentMethod.payment_method
        ) {
          var subs = subscriptionData.subscription
          var paym = paymentMethod.payment_method
          $('.pro-subscription .header-payment-details').html(`
                        <h3 class="title">${
                          subs.frequency === 'monthly' ? 'Monthly' : 'Yearly'
                        } Pro Subscription
                            <span class="price">$${subs.amount} / <span>${
            subs.frequency === 'monthly' ? 'Per month, <br>for 12 months' : 'Per year'
          }</span></span>
                        </h3>
                    `)
          if ($('.pro-subscription .card').length) {
            var cardImg = ''
            switch (that.brandKit.handleize(paym.institution)) {
              case 'visa':
                cardImg = '<img src="../assets/img/visa-card.png" alt="visa" class="card--img" />'
                break
              case 'mastercard':
                cardImg =
                  '<img src="../assets/img/mastercard-card.png" alt="mastercard" class="card--img" />'
                break
              case 'american-express':
                cardImg = '<img src="../assets/img/amex-card.png" alt="amex" class="card--img" />'
                break
            }
            $('.pro-subscription .card').html(`
                            ${cardImg}
                            <p class="card--info">${paym.institution} ending in ${
              paym.last4
            } <span>${paym.expires ? 'Expires: ' + paym.expires : ''}</span></p>
                        `)
          }
          if ($('.pro-subscription .date-bill').length) {
            let nextPaymentAt = null
            if (subs.next_payment_at) {
              const datePayment = new Date(subs.next_payment_at)
              nextPaymentAt = (datePayment.getMonth() + 1).toString().padStart(2, '0')
              nextPaymentAt += '/' + datePayment.getDate().toString().padStart(2, '0')
              nextPaymentAt += '/' + datePayment.getFullYear()
            }
            $('.pro-subscription .date-bill').html(`
                            Your next bill is for <b>${parseFloat(subs.amount).toFixed(
                              2,
                            )} USD</b> ${nextPaymentAt ? 'on <b>' + nextPaymentAt + '</b>' : ''}
                        `)
          }
        }
      }
    })
  },
  loadBuilderComponents: async (section = '') => {
    var that = this
    var datapage_builder = null
    if (localStorage.getItem('datapage_builder'))
      datapage_builder = JSON.parse(localStorage.getItem('datapage_builder'))
    if (
      datapage_builder &&
      Math.round((new Date().getTime() - datapage_builder.dateUpdate) / (1000 * 60 * 60)) <= 1
    ) {
      switch (section) {
        case 'fonts':
          that.brandKit.renderBuilderComponentFonts(datapage_builder)
          break
        case 'colors':
          that.brandKit.renderBuilderComponentColors(datapage_builder)
          break
        case 'images':
          that.brandKit.renderBuilderComponentImages(datapage_builder)
          break
      }
    } else {
      firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
          var _token = await user.getIdToken(true)
          var _account = await that.brandKit.apiRequest('GET', `/accounts/${user.uid}`, {
            Authorization: _token,
          })
          datapage_builder = {}
          datapage_builder.user_name = _account.name
          datapage_builder.user_planpaid = _account.isPlanPaid
          datapage_builder.user_suscription = _account.subscription_status
          datapage_builder.dateUpdate = new Date().getTime()
          if (_account.isPlanPaid) {
            var data = await that.brandKit.getBrandKit(_token, user.uid)
            datapage_builder.brand_kit = data.brand_kit
          }
          localStorage.setItem('datapage_builder', JSON.stringify(datapage_builder))
          switch (section) {
            case 'fonts':
              that.brandKit.renderBuilderComponentFonts(datapage_builder)
              break
            case 'colors':
              that.brandKit.renderBuilderComponentColors(datapage_builder)
              break
            case 'images':
              that.brandKit.renderBuilderComponentImages(datapage_builder)
              break
          }
        }
      })
    }
  },
  loadDataInit: async (token, uid) => {
    var that = this
    var brandKitData = await that.brandKit.getBrandKit(token, uid)
    if (brandKitData.brand_kit) {
      if (localStorage.getItem('datapage_builder')) {
        var builder = JSON.parse(localStorage.getItem('datapage_builder'))
        builder.brand_kit = brandKitData.brand_kit
        localStorage.removeItem('datapage_builder')
        localStorage.setItem('datapage_builder', JSON.stringify(builder))
      }
      brandKitData.brand_kit.dateUpdate = new Date().getTime()
      localStorage.setItem('datapage_brandkit', JSON.stringify(brandKitData.brand_kit))
      that.brandKit.renderBrandKitPage(brandKitData.brand_kit)
    }
  },
  renderBuilderComponentFonts: (datapage_builder) => {
    var that = this
    if ($('#themeOptions').length) {
      var htmlFonts = '',
        htmlFree = ''
      htmlFree = `
                <div class="fonts--account-free">
                    <div>
                        <p>Upgrade to Yearly Pro to add your licensed fonts</p>
                        <button type="button"><img src="../assets/img/icons/star.png" alt="info" /> Upgrade</button>
                    </div>
                </div>
            `
      htmlFonts = `
                <div class="fonts--account-free">
                    <div><p>You still don't have sources added</p></div>
                </div>
            `
      if (datapage_builder.brand_kit) {
        var validFonts = datapage_builder.brand_kit.fonts.filter((x) => x.url)
        if (validFonts.length > 0) (htmlFonts = ''), datapage_builder.brand_kit.fonts.reverse()
        datapage_builder.brand_kit.fonts.map((x, y) => {
          if (x.url) {
            var fontNamePath = decodeURIComponent(x.url)
              .replace('http://', '')
              .replace('https://', '')
            var fontName = fontNamePath.split('/')[fontNamePath.split('/').length - 1]
            var fontNameWithoutExt = that.brandKit.handleize(fontName.replace(/\.[^.]*$/, ''))
            var textSample =
              x.style === 'title'
                ? 'Heading Sample'
                : x.style === 'body'
                ? 'The quick brown fox jumps over the lazy dog.'
                : 'Sample'
            if (!$(`#style-${fontNameWithoutExt}`).length)
              $('body').append(`
                                <style id="style-${fontNameWithoutExt}">
                                    @font-face {
                                        font-family: 'bk-${fontNameWithoutExt}';
                                        src: url(${x.url});
                                    }
                                </style>
                            `)
            htmlFonts += `
                            <div>
                                <input id="fontCOption${y}" type="radio" value="${fontNameWithoutExt}" data-style="${
              x.style
            }" name="themeFontCustom${that.brandKit.capitalize(
              x.style,
            )}[]" data-field="data-custom-font" data-action="updateCustomFont" />
                                <label for="fontCOption${y}">
                                    <div>${fontNameWithoutExt}</div>
                                    <div style=" text-align: center; font-family: 'bk-${fontNameWithoutExt}';">${textSample}</div>
                                </label>
                            </div>
                        `
          }
        })
      }
      $('#blockMyFonts').remove()
      $('#themeOptions > div').append(`
                <div id="blockMyFonts" class="formItem" style="display:none;">
                    <div class="fontList myfonts">
                        ${datapage_builder.user_planpaid ? htmlFonts : htmlFree}
                    </div>
                </div>
            `)
    }
  },
  renderBuilderComponentColors: (datapage_builder) => {
    var that = this
    if ($('#styleEditor').length) {
      var htmlColors = '',
        htmlFree = ''
      htmlFree = ``
      htmlColors = `
                <div class="fonts--account-free">
                    <div><p>You still don't have sources added</p></div>
                </div>
            `
      if (datapage_builder.brand_kit) {
        if (datapage_builder.brand_kit.colors.length > 0) htmlColors = ''
        datapage_builder.brand_kit.colors.map((x) => {
          htmlColors += `
                        <strong>${x.name}</strong>
                        <div class="swatches-colors">
                    `
          x.palette.map((y) => {
            htmlColors += `
                            <div><a href="#" data-color="${y}" data-source="mypalettes" title="Current ${y}" style="background: ${y};"></a></div>
                        `
          })
          htmlColors += `
                        </div>
                    `
        })
      }
      $('#blockMyPalettes').remove()
      $('#styleEditor').append(`
                <div id="blockMyPalettes" class="styleSection" style="display:none;">
                    ${datapage_builder.user_planpaid ? htmlColors : htmlFree}
                </div>
            `)
    }
  },
  renderBuilderComponentImages: (datapage_builder) => {
    var that = this
    if ($('#modalImageMyUploads .assetsContainer .assets').length) {
      var htmlImages = '',
        htmlFree = ''
      htmlFree = ` `
      htmlImages = `
                <div class="fonts--account-free">
                    <div><p>You still don't have sources added</p></div>
                </div>
            `
      if (datapage_builder.brand_kit) {
        if (datapage_builder.brand_kit.images.length > 0) htmlImages = ''
        var verPic = new Date().getTime()
        datapage_builder.brand_kit.images.map((x) => {
          htmlImages += `
                        <div class="landscape">
                            <img 
                                data-download-url="${x.url}?v=${verPic}" 
                                data-size-regular="${x.url}?v=${verPic}" 
                                src="${x.url}?v=${verPic}"
                                /> 
                            <span>by Brand Kit</span>
                        </div>
                    `
        })
      }
      $('#modalImageMyUploads .assetsContainer .assets').empty()
      $('#modalImageMyUploads .assetsContainer .assets').append(
        `${datapage_builder.user_planpaid ? htmlImages : htmlFree}`,
      )
    }
  },
  handleize: (str = '') => {
    str = str
      .replace('á', 'a')
      .replace('à', 'a')
      .replace('ä', 'a')
      .replace('â', 'a')
      .replace('Á', 'A')
      .replace('À', 'A')
      .replace('Â', 'A')
      .replace('Ä', 'A')
      .replace('ª', 'a')
      .replace('å', 'a')
      .replace('æ', 'ae')
    str = str
      .replace('é', 'e')
      .replace('è', 'e')
      .replace('ë', 'e')
      .replace('ê', 'e')
      .replace('É', 'E')
      .replace('È', 'E')
      .replace('Ê', 'E')
      .replace('Ë', 'E')
    str = str
      .replace('í', 'i')
      .replace('ì', 'i')
      .replace('ï', 'i')
      .replace('î', 'i')
      .replace('Í', 'I')
      .replace('Ì', 'I')
      .replace('Ï', 'I')
      .replace('Î', 'I')
    str = str
      .replace('ó', 'o')
      .replace('ò', 'o')
      .replace('ö', 'o')
      .replace('ô', 'o')
      .replace('Ó', 'O')
      .replace('Ò', 'O')
      .replace('Ö', 'O')
      .replace('Ô', 'O')
      .replace('ø', 'o')
    str = str
      .replace('ú', 'u')
      .replace('ù', 'u')
      .replace('ü', 'u')
      .replace('û', 'u')
      .replace('Ú', 'U')
      .replace('Ù', 'U')
      .replace('Û', 'U')
      .replace('Ü', 'U')
    str = str.replace('ñ', 'n').replace('Ñ', 'n')
    str = str.toLowerCase()

    var toReplace = ['"', "'", '\\', '(', ')', '[', ']']

    // For the old browsers
    for (var i = 0; i < toReplace.length; ++i) {
      str = str.replace(toReplace[i], '')
    }
    str = str.replace(/\W+/g, '-')
    if (str.charAt(str.length - 1) == '-') str = str.replace(/-+\z/, '')

    if (str.charAt(0) == '-') str = str.replace(/\A-+/, '')

    return str
  },
  renderBrandKitPage: (datapage_brandkit) => {
    var that = this
    //IMAGES BLOCK
    // $('.images-grid .slide-img').slick('unslick');
    if (datapage_brandkit.images.length > 4)
      $('#brand-kit .images-grid .slide-img').addClass('slide-active')
    else $('#brand-kit .images-grid .slide-img').removeClass('slide-active')
    $('#brand-kit .images-grid .slide-img .image').remove()
    for (var i = 0; i < datapage_brandkit.images.length; i++) {
      var a = datapage_brandkit.images[i]

      let templateHTML = $(`<li class="image splide__slide" data-id="${a.id}">
                                    <img src="${a.url}" />
                                    <button class="btn-remove-image">X</button>
                                </li>`)
      templateHTML.appendTo($('#brand-kit .images-grid .slide-img .slide-img-list'))
    }
    if (datapage_brandkit.images.length > 0)
      new Splide('.splide', {
        cover: true,
        fixedWidth: '25rem',
        // height : '8rem',
        perPage: 3,
        pagination: false,
        breakpoints: {
          992: {
            perPage: 3,
            fixedWidth: '17.3rem',
          },
          768: {
            perPage: 2,
            fixedWidth: '20rem',
          },
          576: {
            perPage: 1,
            // fixedWidth: '20rem',
          },
        },
      }).mount()

    //COLORS BLOCK
    $('#brand-kit .brand-colors .box').empty()
    datapage_brandkit.colors.map((a) => {
      var paletteHtml = []
      a.palette.map((c, d) => {
        paletteHtml.push(`
                    <div class="color-box" data-item="${d}" style="background-color:${c};">
                        <button class="btn-remove-color" type="button" onclick="brandKit.removeBrandKitColor(this)">X</button>
                        <div class="color-text">${c}</div>
                    </div>
                `)
      })
      $('#brand-kit .brand-colors .box').append(`
                <div class="box__item" data-item="${a.id}">
                    <input type="hidden" id="input-store-palette--${
                      a.id
                    }" name="input-store-palette--${a.id}" value="${a.name}" />
                    <input type="hidden" id="input-color-palette--${
                      a.id
                    }" name="input-color-palette--${a.id}" value="${a.palette.join(',')}" />
                    <div class="header">
                        <p class="title-palette">${a.name}</p>
                        <span class="edit-title-palette">
                            <img src="../assets/img/icons/icon-pencil.svg" alt="editar">
                        </span>
                    </div>
                    <div class="colors-grid">
                        ${paletteHtml.join('')}
                        <label>
                            <span class="add">
                                <img src="../assets/img/icons/icon-plus.svg" alt="add">
                            </span>
                        </label>
                    </div>
                </div>
            `)
    })
    if (datapage_brandkit.colors.length === 0) {
      $('#brand-kit .brand-colors .box').append(`
                <div class="box__item" data-item="1">
                    <input type="hidden" id="input-store-palette--1" name="input-store-palette--1" value="Primary palette" />
                    <input type="hidden" id="input-color-palette--1" name="input-color-palette--1" value="" />
                    <div class="header">
                        <p class="title-palette">Primary palette</p>
                        <span class="edit-title-palette">
                            <img src="../assets/img/icons/icon-pencil.svg" alt="editar">
                        </span>
                    </div>
                    <div class="colors-grid">
                        <label>
                            <span class="add">
                                <img src="../assets/img/icons/icon-plus.svg" alt="add">
                            </span>
                        </label>
                    </div>
                </div>
                <div class="box__item" data-item="2">
                    <input type="hidden" id="input-store-palette--2" name="input-store-palette--2" value="Secondary palette" />
                    <input type="hidden" id="input-color-palette--2" name="input-color-palette--2" value="" />
                    <div class="header">
                        <p class="title-palette">Secondary palette</p>
                        <span class="edit-title-palette">
                            <img src="../assets/img/icons/icon-pencil.svg" alt="editar">
                        </span>
                    </div>
                    <div class="colors-grid">
                        <label>
                            <span class="add">
                                <img src="../assets/img/icons/icon-plus.svg" alt="add">
                            </span>
                        </label>
                    </div>
                </div>
            `)
    }
    //FONTS BLOCK
    if (datapage_brandkit.fonts.length > 0) datapage_brandkit.fonts.reverse()
    datapage_brandkit.fonts.map((a) => {
      if (a.url && a.url !== '') {
        var fontNamePath = decodeURIComponent(a.url).replace('http://', '').replace('https://', '')
        var fontName = fontNamePath.split('/')[fontNamePath.split('/').length - 1]
        var fontNameWithoutExt = that.brandKit.handleize(fontName.replace(/\.[^.]*$/, ''))
        if (!$(`#style-${fontNameWithoutExt}`).length)
          $('body').append(`
                        <style id="style-${fontNameWithoutExt}">
                            @font-face {
                                font-family: 'bk-${fontNameWithoutExt}';
                                src: url(${a.url});
                            }
                        </style>
                    `)

        switch (a.style) {
          case 'title':
            $('.input-font-title').val(fontNameWithoutExt)
            $('#fontSelect-input-font-title > a > span').text(fontNameWithoutExt)
            $('#fontSelect-input-font-title > a > span').attr(
              'style',
              `font-family: 'bk-${fontNameWithoutExt}';`,
            )
            break
          case 'body':
            $('.input-font-text').val(fontNameWithoutExt)
            $('#fontSelect-input-font-text > a > span').text(fontNameWithoutExt)
            $('#fontSelect-input-font-text > a > span').attr(
              'style',
              `font-family: 'bk-${fontNameWithoutExt}';`,
            )
            break
        }
      }
    })
  },
  selectBrandKitColor: (element) => {
    var that = this
    var colorSelected = $(element).closest('#colorInput').find('input').val().trim()
    if (colorSelected !== '') {
      $('#brand-kit .brand-colors .box').prepend(`<div class="mask-block"><div></div></div>`)
      that.brandKit.maskBrandKitBlock(true, $('#brand-kit .brand-colors .box'))
      var itemNum = $(element).closest('.colors-grid').find('.color-box').length
      var boxItem = $(element).closest('.box__item').attr('data-item')
      var currPalette = $(`#input-color-palette--${boxItem}`).val().trim().split(',')
      if ($(`#input-color-palette--${boxItem}`).val().trim() === '') currPalette = []
      if (!currPalette.includes(colorSelected)) {
        $(element).closest('.colors-grid').find('.color-box:last').after(`
                    <div class="color-box" data-item="${
                      itemNum + 1
                    }" style="background-color:${colorSelected};">
                        <button class="btn-remove-color" type="button" onclick="brandKit.removeBrandKitColor(this)">X</button>
                        <div class="color-text">${colorSelected}</div>
                    </div>
                `)
        currPalette.push(colorSelected)
        $(`#input-color-palette--${boxItem}`).val(currPalette.join(','))
      }
      $('#styleEditor').remove()
      var dataApi = { colors: [] }
      if ($('.brand-colors > .box > .box__item').length) {
        $('.brand-colors > .box > .box__item').each((a, b) => {
          var itemBox = $(b).attr('data-item')
          var itemsArray = $(`#input-color-palette--${itemBox}`).val().trim()
          dataApi.colors.push({
            name: $(`#input-store-palette--${itemBox}`).val(),
            palette: itemsArray !== '' ? itemsArray.split(',') : [],
          })
        })
      }
      that.brandKit.updateBrandKit(dataApi, 'colors')
    }
  },
  removeBrandKitColor: (element) => {
    var that = this
    that.brandKit.maskBrandKitBlock(true, $('#brand-kit .brand-colors .box'))
    $(element).closest('.color-box').remove()
    var dataApi = { colors: [] }
    if ($('.brand-colors > .box > .box__item').length) {
      $('.brand-colors > .box > .box__item').each((a, b) => {
        var itemBox = $(b).attr('data-item')
        var colorCodes = []
        if ($(b).find('.colors-grid').find('.color-box').length > 0) {
          $(b)
            .find('.colors-grid')
            .find('.color-box')
            .each((c, d) => {
              var colorCode = $(d).find('.color-text').text().trim()
              $(d).attr('data-item', c)
              colorCodes.push(colorCode)
            })
        }
        $(`#input-color-palette--${itemBox}`).val(colorCodes.join(','))
        dataApi.colors.push({
          name: $(`#input-store-palette--${itemBox}`).val(),
          palette: colorCodes,
        })
      })
    }
    that.brandKit.updateBrandKit(dataApi, 'colors')
  },
  renderModalForm: (data = {}) => {
    var that = this
    if ($('#modalCreateEditForm').length) $('#modalCreateEditForm').remove()
    let contentHtml = ''
    switch (data.block) {
      case 'colors':
        contentHtml = `
                    <div class="modal-form--line">
                        <label>Palette Name</label>
                        <input type="text" name="brand_color_palette_name" maxlength="20" value="${
                          data.inputValue ? data.inputValue : ''
                        }"/>
                    </div>
                `
        break
      case 'fonts':
        const bkd = JSON.parse(localStorage.getItem('datapage_brandkit'))
        let font_defaults = ['title', 'body']
        let radioInputs = ''
        font_defaults.map((x, y) => {
          radioInputs += `
                        <label><input type="radio" name="brand_font_style" value="${x}" data-id="-1" ${
            y === 0 ? 'checked' : ''
          } /> ${that.brandKit.capitalize(x)}</label>
                    `
        })
        if (bkd.fonts.length > 0) {
          radioInputs = ''
          bkd.fonts.map((x, y) => {
            radioInputs += `
                            <label><input type="radio" name="brand_font_style" value="${
                              x.style
                            }" data-id="${x.id}" ${
              y === 0 ? 'checked' : ''
            } /> ${that.brandKit.capitalize(x.style)}</label>
                        `
            if (font_defaults.includes(x.style))
              font_defaults.splice(font_defaults.indexOf(x.style), 1)
          })
          if (font_defaults.length > 0) {
            font_defaults.map((x) => {
              radioInputs += `
                                <label><input type="radio" name="brand_font_style" value="${x}" data-id="-1" /> ${that.brandKit.capitalize(
                x,
              )}</label>
                            `
            })
          }
        }
        contentHtml = `
                    <div class="modal-form--line" style="text-align:left;">
                        <input type="hidden" name="brand_font_name" value="${
                          data.myfontName ? data.myfontName : ''
                        }" />
                        <div class="block-titles"><label>Font Name:</label><label>${
                          data.myfontName ? data.myfontName : ''
                        }</label></div>
                        <div class="block-radios">
                            <label>Font Style: </label>
                            ${radioInputs}
                        </div>
                    </div>
                `
        break
    }
    data.element.after(`
            <div id="modalCreateEditForm">
                ${contentHtml}
                <a href="javascript" data-action="updateBrand" data-load="0" data-item="${
                  data.itemNumber ? data.itemNumber : -1
                }">Save</a>
                <a href="#" data-action="closeModal">Cancel</a>
            </div>
        `)
    $('#modalCreateEditForm, #overlay').addClass('active')
    switch (data.block) {
      case 'colors':
        $('#modalCreateEditForm input[name="brand_color_palette_name"]').focus()
        break
      case 'fonts':
        //--
        break
    }
  },
  renderNewPaletteBlock: (dataItem) => {
    var paletteName = $('input[name="brand_color_palette_name"]').val().trim()
    var paletteBlocks = $('.brand-colors > .box > .box__item').length
    if (paletteName === '') {
      $('input[name="brand_color_palette_name"]').focus()
      return
    }
    if (!$(`.box__item[data-item=${dataItem}]`).length) {
      var tempBlockId = paletteBlocks + 1001
      $('.brand-colors > .box').append(`
                <div class="box__item" data-item="${tempBlockId}">
                    <input type="hidden" id="input-store-palette--${tempBlockId}" name="input-store-palette--${tempBlockId}" value="${paletteName}" />
                    <input type="hidden" id="input-color-palette--${tempBlockId}" name="input-color-palette--${tempBlockId}" value="" />
                    <div class="header">
                        <p class="title-palette">${paletteName}</p>
                        <span class="edit-title-palette">
                            <img src="../assets/img/icons/icon-pencil.svg" alt="editar">
                        </span>
                    </div>
                    <div class="colors-grid">
                        <label>
                            <span class="add">
                                <img src="../assets/img/icons/icon-plus.svg" alt="add">
                            </span>
                        </label>
                    </div>
                </div>
            `)
    } else {
      $(`.box__item[data-item=${dataItem}]`).find('.title-palette').text(paletteName)
      $(`.box__item[data-item=${dataItem}]`)
        .find(`#input-store-palette--${dataItem}`)
        .val(paletteName)
    }
  },
  renderModalSuscriptionFree: () => {
    $('#modalPublish, #overlay').addClass('active')
    var markup =
      /*'<div class="craftLink">'+
                '<h1>Free Suscription</h1>'+
                '<p>Your Suscription Status is: <b>Free</b> Please Upgrade</p>'+
            '</div>'+
            '<a onclick="brandKit.renderUpgradeSusAccount()" class="btn-upgrade btn-upgrade-now">'+
                '<img src="../assets/img/icons/star.png" alt="info" class="star star-free-account">'+
            'Upgrade</a>'*/
      `<div class="block craftLink">
                        <!-- bloque de titulo -->
                        <div class="block-title bg-blue">
                            <h3>Upgrade to Yearly Pro</h3>
                        </div>                
                        <!-- bloque de contenido -->
                        <div class="block-content">
                        <span>Looking to add photos, logos, colors and fonts?</span>
                        <hr class ="blue">
                        <br>
                        <br>
                        <br>
                            <a onclick="brandKit.renderUpgradeSusAccount()" class="btn-upgrade btn-upgrade-now">
                            <img src="../assets/img/icons/star.png" alt="info" class="star star-free-account">
                            Upgrade now</a>
                        </div>        
                    </div>`
    $('#modalPublish').html(markup)
  },
  renderUpgradeSusAccount: () => {
    console.log('Click  renderUpgradeSusAccount: ()')

    $('#modalPublish').addClass('active')
    var that = this
    var markup = `<div class="block">
                <div class="block-title bg-salmon">
                    <a href="" data-action="closeModal"><i class="fa fa-times"></i></a>
                    <h3>Yearly Pro</h3>
                    <span id="pay-price" class="price d-inline-block">$750 / </span>
                    <div class="info">
                        <small class="price-year">Per year</small>
                        <small class="price-month" style="display: none;">Per month</small>
                        <small class="price-month" style="display: none;">For 12 months</small>
                    </div>
                    <div class="info-switch">
                        <small>Pay Monthly</small>
                        <label class="switch">
                            <input type="checkbox" name="pay-switcher" checked="">
                            <span id="pay-switcher" class="slider round"></span>
                        </label>
                        <small>Pay Annually <b>and save 20%</b></small>              
                    </div>
                </div>
                <div class="block-content">
                    <div id="form-group-pro" class="form-group">
                        <label for="organization-size">Select your organization size</label>
                        <select id="organization-size" name="organization-size" class="form-control custom-select-sm">
                            <option value="750">Nonprofits under $1M/year in revenue</option>
                            <option value="1250">Nonprofits between $1M-$2M/year in revenue</option>
                            <option value="1750">Nonprofits between $2M-$5M/year in revenue</option>
                            <option value="2250">Nonprofits over $5M/year in revenue</option>
                        </select>
                    </div>
                    <hr class="salmon"> 
                    <div class="">
                        <form id="createGuestAccount">
                            <div class="block-form-payment-control">
                                <label>First Name</label>
                                <input type="text" name="cardFirstName" id="cardFirstName" />
                            </div>
                            <div class="block-form-payment-control">
                                <label>Last Name</label>
                                <input type="text" name="cardLastName" id="cardLastName" />
                            </div>
                        </form>
                    </div>
                    <br>
                    <!--<p>Example Card Data: 4242 4242 42424 4242 <b>.</b> 11/22 <b>.</b> 121 <b>.</b> 12121</p>-->
                    <br>
                    <div class="block-form-payment-control">
                        <div class="block-inline block-inline--left">
                            <label>Card</label>
                            <div id="card-aupgrade"></div>
                        </div>
                        <div class="block-inline block-inline--right">
                            <label>Promo Code</label>
                            <input type="text" name="promo_code" id="promo_code"/>
                        </div>
                    </div>                            
                    <a style="background-color: #ff7b7b; color:white; border-radius: 60px; border: 0;" onclick="brandKit.execUpgradeNow(this)" class="btn-upgrade btn-upgrade-now">
                        <img src="../assets/img/icons/star.png" alt="info" class="star star-free-account">
                        Upgrade
                    </a>
                </div>
            </div>
            `
    $('#modalPublish').html(markup)
    const style = {
      base: {
        iconColor: '#666ee8',
        color: '#31325f',
        fontWeight: 400,
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '15px',
        '::placeholder': {
          color: '#aab7c4',
        },
        ':-webkit-autofill': {
          color: '#666ee8',
        },
      },
    }
    that.brandKit.stripeEl = Stripe(that.brandKit.stripe_public)
    var elements = that.brandKit.stripeEl.elements()
    that.brandKit.cardStripe = elements.create('card', { style, hidePostalCode: true }) //elements.create('card');
    that.brandKit.cardStripe.mount('#card-aupgrade')
  },
  execUpgradeNow: async (e) => {
    var that = this
    if ($(e).attr('disabled')) return false
    $(e).html('Loading...')
    $(e).attr('disabled', 'disabled')
    $('.ul-error-payment').remove()
    $('body').prepend(`<div class="mask-payment-subscription"></div>`)

    var validSession = await that.brandKit.validLoginSession()
    if (!validSession) {
      localStorage.removeItem('UserLogged')
      window.location.href = '/'
      return
    }

    that.brandKit.stripeEl.createToken(that.brandKit.cardStripe).then(function (res) {
      if (res.error) {
        $(e).removeAttr('disabled')
        $(e).html('Upgrade')
        $('.mask-payment-subscription').remove()
      } else if (res.token) {
        var tokenStripe = res.token.id
        var isYearly = $('input[name=pay-switcher]').is(':checked')
        var amountYearly = parseInt($('select[name=organization-size]').val())
        var priceSuscription = isYearly ? amountYearly : amountYearly / 10
        var priceCurrency = 'usd'
        firebase.auth().onAuthStateChanged(async (user) => {
          if (user) {
            var tokenApi = await user.getIdToken(true)
            var _headers = {
              Authorization: tokenApi,
            }
            var _body = {
              payment_token: tokenStripe,
            }
            /* call 1: api payment methods */
            var res1 = await that.brandKit.apiRequest(
              'POST',
              `/accounts/${user.uid}/payment_methods`,
              _headers,
              _body,
            )
            console.log('res1', res1)
            if (res1.payment_method) {
              var cart = {
                amount: priceSuscription * 100,
                currency: priceCurrency,
              }

              var fullName = $('#cardFirstName').length ? $('#cardFirstName').val().trim() : ''
              fullName +=
                (fullName !== '' ? ' ' : '') +
                ($('#cardLastName').length ? $('#cardLastName').val().trim() : '')
              _body = {
                subscription: {
                  amount_dollars: !isYearly ? cart.amount / 10 : cart.amount / 100,
                  frequency: !isYearly ? 'monthly' : 'annually',
                  category: 'premium',
                  promo_code: $('#promo_code').val().trim(),
                  style: 'upgrade',
                },
              }
              /* call 2: api send suscription */
              var res5 = await that.brandKit.apiRequest(
                'POST',
                `/accounts/${user.uid}/subscriptions`,
                _headers,
                _body,
              )
              console.log('res5', res5)
              if (res5.error) {
                $(e).before(`
                                    <ul class="error ul-error-payment">
                                        <li>${res5.error}</li>
                                    </ul>
                                `)
                $(e).removeAttr('disabled')
                $(e).html('Upgrade')
                $('.mask-payment-subscription').remove()
                return false
              }
              localStorage.removeItem('datapage_brandkit')
              localStorage.removeItem('datapage_builder')
              setTimeout(function () {
                window.location.href = '/dashboard/#/account'
                setTimeout(function () {
                  window.top.location.reload()
                }, 600)
              }, 600)
            }
          }
        })
      }
    })
  },
  validLoginSession: async () => {
    if (!localStorage.getItem('UserLogged')) return false

    const user_logged = JSON.parse(localStorage.getItem('UserLogged'))
    const session_data = await firebase
      .database()
      .ref(`userSession/${user_logged.uid}`)
      .once('value')

    if (!user_logged || !user_logged.lastLoginAt || !session_data.val()) return false

    const user_session = session_data.val()
    const last_login_str = user_logged.sessionFlag
      ? user_logged.sessionFlag
      : user_logged.lastLoginAt
    if (!user_session.dateTime) user_session.dateTime = last_login_str
    if (
      last_login_str.toString() !== user_session.dateTime.toString() ||
      !user_session.sessionActive
    )
      return false

    return true
  },
  evalLoginSession: async () => {
    const that = this
    if (typeof getParam === 'function' && getParam('user') && getParam('email') && getParam('pass'))
      return
    if (!localStorage.getItem('UserLogged')) {
      window.location.href = '/'
      return
    }
    const validSess = await that.brandKit.validLoginSession()
    if (!validSess) {
      localStorage.removeItem('UserLogged')
      setTimeout(() => {
        window.location.href = '/'
      }, 500)
    }
  },
}

$(function () {
  if (typeof loadBrandFonts === 'function' && $('#brand-kit').length) {
    setTimeout(function () {
      loadBrandFonts('.input-font-title', 'Add Title font style', 'title')
      loadBrandFonts('.input-font-text', 'Add Text font style', 'subtitle')
      brandKit.loadDataPage()
    }, 1200)
  }
  if (window.location.href.includes('/dashboard')) brandKit.loadDataAccount()
})

/* dropdown selects */
$(document).on('click', '.custom-dw-font-select > a', function (e) {
  e.preventDefault()
  $('.custom-dw-font-select.font-select-active').removeClass('font-select-active')
  $('.custom-dw-font-select .fs-drop').hide()
  $(e.target).closest('.font-select').addClass('font-select-active')
  $(e.target).closest('.font-select').find('.fs-drop').show()
})
$(document).on('mouseleave', '.custom-dw-font-select', function (e) {
  e.preventDefault()
  $('.custom-dw-font-select.font-select-active').removeClass('font-select-active')
  $('.custom-dw-font-select .fs-drop').hide()
})
$(document).on('mouseover', '.custom-dw-font-select .fs-drop li', function (e) {
  e.preventDefault()
  $('.custom-dw-font-select .active').removeClass('active')
  $(e.target).addClass('active')
})
$(document).on('mouseleave', '.custom-dw-font-select .fs-drop li', function (e) {
  e.preventDefault()
  $('.custom-dw-font-select .active').removeClass('active')
})
$(document).on('click', '.custom-dw-font-select .fs-drop li', function (e) {
  e.preventDefault()
  var currValue = $(e.target).attr('data-value')
  var currStyle = $(e.target).attr('style')
  var currText = $(e.target).text()
  $(e.target).closest('.font-select').find('a > span').text(currText)
  $(e.target).closest('.font-select').find('a > span').attr('style', currStyle)
  $($(e.target).closest('.font-select').attr('data-input-selector')).val(currValue)
  $('.custom-dw-font-select.font-select-active').removeClass('font-select-active')
  $('.custom-dw-font-select .fs-drop').hide()
})
$(document).on('click', '.add-new-palette', function (e) {
  e.preventDefault()
  if (!localStorage.getItem('datapage_brandkit')) {
    brandKit.renderModalSuscriptionFree()
    return
  }
  brandKit.renderModalForm({
    element: $(e.target),
    block: 'colors',
  })
})
$(document).on('click', 'a[data-action="updateBrand"]', function (e) {
  e.preventDefault()
  $('.block-error').remove()
  var dataItem = $(e.target).attr('data-item')
  var dataLoad = $(e.target).attr('data-load')
  if (dataLoad === '1') return false
  $(e.target).attr('data-load', '1')
  if ($('input[name="brand_color_palette_name"]').length)
    brandKit.renderNewPaletteBlock(dataItem),
      $('#overlay, #modalCreateEditForm').removeClass('active'),
      $(e.target).attr('data-load', '0')
  else if ($('input[name="brand_font_style"]').length) {
    var fontName = $('input[name="brand_font_name"]').val()
    var fontWithoutExt = fontName.split('.')[0] //file.name.replace(/\.[^.]*$/, ''); // without file extension
    var fontExtension = '.' + fontName.split('.')[1]
    var avFormat = ['.ttf', '.otf']
    if (!avFormat.includes(fontExtension)) {
      $('#modalCreateEditForm .modal-form--line').append(`
                <label class="block-error">Solo archivos con formato ${avFormat.join(',')}</label>
            `)
      return false
    }
    brandKit.maskBrandKitBlock(true, $('#brand-kit .brand-fonts .box'))
    if (parseInt($('input[name="brand_font_style"]:checked').attr('data-id')) === -1) {
      var dataApi = {
        font: {
          name: fontWithoutExt,
          style: $('input[name="brand_font_style"]:checked').val(),
        },
      }
      brandKit.updateBrandKit(dataApi, 'fonts', 'POST', (result) => {
        if (result && result.font && result.font.id)
          brandKit.uploadBrandKitFile($('#input-store-fonts')[0].files[0], 'fonts', result.font.id),
            $('#overlay, #modalCreateEditForm').removeClass('active'),
            $(e.target).attr('data-load', '0')
      })
    } else {
      brandKit.uploadBrandKitFile(
        $('#input-store-fonts')[0].files[0],
        'fonts',
        $('input[name="brand_font_style"]:checked').attr('data-id'),
      )
      $('#overlay, #modalCreateEditForm').removeClass('active')
      $(e.target).attr('data-load', '0')
    }
  }
})
$(document).on('click', '.edit-title-palette', function (e) {
  e.preventDefault()
  if (!localStorage.getItem('datapage_brandkit')) {
    brandKit.renderModalSuscriptionFree()
    return
  }
  var $boxItem = $(e.target).closest('.box__item')
  var paletteValue = $boxItem.find(`#input-store-palette--${$boxItem.attr('data-item')}`).val()
  brandKit.renderModalForm({
    element: $('.add-new-palette'),
    block: 'colors',
    inputValue: paletteValue,
    itemNumber: $boxItem.attr('data-item'),
  })
})
$(document).on('click', '.colors-grid span.add', function (e) {
  e.preventDefault()
  if (localStorage.getItem('datapage_brandkit')) {
    var $labelItem = $(e.target).closest('label')
    makeModalColor($labelItem)
  }
})
$(document).on('click', '.add-new-font', function (e) {
  e.preventDefault()
  if (!localStorage.getItem('datapage_brandkit')) {
    brandKit.renderModalSuscriptionFree()
    return
  }
  $('#input-store-fonts').trigger('click')
})
$(document).on('change', '#input-store-fonts', function (e) {
  e.preventDefault()
  var input = e.target
  var files = input.files
  if (!localStorage.getItem('datapage_brandkit')) top.location.reload()

  for (var i = 0; i < files.length; i++) {
    ;((file) => {
      brandKit.renderModalForm({
        element: $(input),
        block: 'fonts',
        myfontName: file.name,
      })
    })(files[i])
  }
})
$(document).on('change', ' input[name=pay-switcher]', function (e) {
  e.preventDefault()
  var amountYearly = parseInt($('select[name=organization-size]').val())
  var priceSuscription = `$${amountYearly / 10}`
  $('.price-year').hide()
  $('.price-month').hide()
  if ($(e.target).is(':checked')) {
    priceSuscription = `$${amountYearly}`
    $(' .price-year').show()
  } else {
    $(' .price-month').show()
  }
  $(' .price.d-inline-block').text(priceSuscription)
})
$(document).on('change', 'select[name=organization-size]', function (e) {
  e.preventDefault()
  var isYearly = $(' input[name=pay-switcher]').is(':checked')
  var amountYearly = parseInt($(e.target).val())
  var priceSuscription = `$${isYearly ? amountYearly : amountYearly / 10}`
  $(' .price.d-inline-block').text(priceSuscription)
})