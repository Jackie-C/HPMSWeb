/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// set interval
num = 0;
setInterval(function () {
    usage = 237;
    num = num + 0.01;
    usage = Math.round(Math.abs(usage * Math.sin(num)));
    $("#currentusage").text(usage);
}, 1000);

data = $.parseJSON('{"took":4,"timed_out":false,"_shards":{"total":10,"successful":10,"failed":0},"hits":{"total":4001,"max_score":0,"hits":[]},"aggregations":{"2":{"buckets":[{"1":{"value":239.20000000000002},"key_as_string":"2016-09-17T12:00:00.000+10:00","key":1474077600000,"doc_count":1},{"1":{"value":37330.539098864276},"key_as_string":"2016-09-24T00:00:00.000+10:00","key":1474639200000,"doc_count":240},{"1":{"value":213444.80179305776},"key_as_string":"2016-09-24T12:00:00.000+10:00","key":1474682400000,"doc_count":1440},{"1":{"value":213748.85099473572},"key_as_string":"2016-09-25T00:00:00.000+10:00","key":1474725600000,"doc_count":1440},{"1":{"value":138770.94737214886},"key_as_string":"2016-09-25T12:00:00.000+10:00","key":1474768800000,"doc_count":880}]}},"status":200}');
console.log(data.aggregations[2].buckets);

function initCharts() {
    function e() {
        for (s.length > 0 && (s = s.slice(1)); s.length < l; ) {
            var e = s.length > 0 ? s[s.length - 1] : 50,
                    i = e + 10 * Math.random() - 5;
            0 > i && (i = 0), i > 100 && (i = 100), s.push(i)
        }
        for (var t = [], a = 0; a < s.length; ++a)
            t.push([a, s[a]]);
     //   console.log(t);
        return t
    }

    function r() {
        function i() {
            r.setData([e()]), r.draw(), setTimeout(i, a)
        }
        if (1 == $("#chart_poc").size()) {
            var t = {
                series: {
                    shadowSize: 1
                },
                lines: {
                    show: !0,
                    lineWidth: .5,
                    fill: !0,
                    fillColor: {
                        colors: [{
                                opacity: .1
                            }, {
                                opacity: 1
                            }]
                    }
                },
                yaxis: {
                    min: 0,
                    max: 100,
                    tickColor: "#eee",
                    tickFormatter: function (e) {
                        return e + "%"
                    }
                },
                xaxis: {
                    show: !1
                },
                colors: ["#6ef146"],
                grid: {
                    tickColor: "#eee",
                    borderWidth: 0
                }
            },
            a = 1000,
                    r = $.plot($("#chart_poc"), [e()], t);
            i()
        }
    }

    if (jQuery.plot) {
        var s = [],
                l = 250;
        r()
    }
}
