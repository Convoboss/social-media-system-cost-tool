$("#inputs").html(
  "<h3>Enter your details</h3>" +
    "<p>The results will be generate automatically</p>" +
    '<form class="row">' +
    '<div class="col-12">' +
    "<label>Social Media</label>" +
    '<select multiple id="social">' +
    '<option value="tw" selected>Twitter</option>' +
    '<option value="fb" selected>Facebook</option>' +
    '<option value="ig">Instagram</option>' +
    '<option value="li">Linkedin</option>' +
    '<option value="pi">Pinterest</option>' +
    '<option value="gb">Google Business</option>' +
    '<option value="yt">Youtube</option>' +
    '<option value="tu">Tumblr</option>' +
    "</select>" +
    "</div>" +
    '<div class="col-12">' +
    "<label>Monthly Budget</label>" +
    '<input class="form-control" type="text" id="budget" value="99" />' +
    '<span class="dollar">$</span>' +
    "</div>" +
    "</form>"
);

$("#results").html(
  "<thead>" +
    '<tr class="head">' +
    '<th class="head_platform"></th>' +
    '<th class="head_plan">Plans</th>' +
    '<th class="head_price">Prices</th>' +
    '<th class="head_account">Profiles</th>' +
    '<th class="head_member">Members</th>' +
    "</tr>" +
    "</thead>" +
    "<tbody>" +
    '<tr class="hootsuite"></tr>' +
    '<tr class="socialpilot"></tr>' +
    '<tr class="socialoomph"></tr>' +
    '<tr class="agorapulse"></tr>' +
    '<tr class="communit"></tr>' +
    '<tr class="crowdfire"></tr>' +
    '<tr class="loomly"></tr>' +
    '<tr class="planable"></tr>' +
    '<tr class="missinglettr"></tr>' +
    '<tr class="viraltag"></tr>' +
    "</tbody>"
);
