angular.module('optinomicCalculation').factory('calculation', function() {

    var calculation = {};

    calculation.main = function(responses) {

        // Copy | Paste From here
        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 




        var calc = {};


        // ------------------------------------------
        // D e f i n i t i o n s
        // ------------------------------------------


        calc.chart = {
            "options": {
                "min": "auto",
                "max": "auto",
                "item_height": 64,
                "item_text_left": 68,
                "item_text_right": 160,
                "color_grid": "#E0E0E0",
                "color_clinic_sample": "#888888",
                "color_skin": "grey_dark_to_light",
                "show_baseline": false,
                "show_scale_text": true,
                "show_score_vertical_line": false,
                "show_score_profile_line": true,
                "show_score_circles": true,
                "range_alpha": 0.1,
                "vertical_grid_every_x": 1,
                "response_title_path": "info.mz.mz_typ",
                "response_date_path": "info.mz.mz_datum"
            },
            "scales": [{
                "left_title": "Somatisierung",
                "left_text": "",
                "right_title": "",
                "right_text": "Kopfschmerzen, Herzbeschwerden, Atemprobleme, Magenbeschwerden, Muskelschmerzen, Schwächegefühl, Schweregefühl, Unwohlsein usw.",
                "score_path": "all_results.somatisierung_z_score",
                "clinic_sample_var": "somatisierung_z_score",
                "items": 7
            }, {
                "left_title": "Psychotizismus",
                "left_text": "",
                "right_title": "",
                "right_text": "Gefühl der Isolation und zwischenmenschlichen Entfremdung. Verzerrter, isolierter Lebensstil bis zu Halluzination und Gedankenzerfall.",
                "score_path": "all_results.psychotizismus_z_score",
                "clinic_sample_var": "psychotizismus_z_score",
                "items": 5
            }, {
                "left_title": "Paranoides Denken",
                "left_text": "",
                "right_title": "",
                "right_text": "Misstrauen, Minderwertigkeitsgefühle: Gedankenprojektion, Feindseligkeit, Argwohn, Grandiosität, Einengung, Angst vor Autonomieverlust und wahnhafte Täuschung.",
                "score_path": "all_results.paranoides_denken_z_score",
                "clinic_sample_var": "paranoides_denken_z_score",
                "items": 5
            }, {
                "left_title": "Phobische Angst",
                "left_text": "",
                "right_title": "",
                "right_text": "Andauernde und unangemessene Furcht als Reaktion auf eine Person, einen Ort, ein Objekt oder einer Situation, die zu Vermeidungs- oder Fluchtverhalten führt.",
                "score_path": "all_results.phobische_angst_z_score",
                "clinic_sample_var": "phobische_angst_z_score",
                "items": 5
            }, {
                "left_title": "Aggressivität / Feindseligkeit",
                "left_text": "",
                "right_title": "",
                "right_text": "Reizbarkeit und Unausgeglichenheit bis hin zu starker Aggressivität. Ärger, Aggression, Irritierbarkeit, Zorn und Verstimmung.",
                "score_path": "all_results.aggressivit__t___feindseligkeit_z_score",
                "clinic_sample_var": "aggressivit__t___feindseligkeit_z_score",
                "items": 5
            }, {
                "left_title": "Ängstlichkeit",
                "left_text": "",
                "right_title": "",
                "right_text": "Angst mit Nervosität, Spannungen und Zittern, Panikattacken und Schreckgefühlen, Gefühle von Besorgnis und Furcht.",
                "score_path": "all_results.__ngstlichkeit_z_score",
                "clinic_sample_var": "__ngstlichkeit_z_score",
                "items": 6
            }, {
                "left_title": "Depressivität",
                "left_text": "",
                "right_title": "",
                "right_text": "Gedrückte Stimmung, Gesunkenes Interesse am Leben, Verringerte Motivation und Energie, Hoffnungslosigkeit, bis hin zu Suizidgedanken.",
                "score_path": "all_results.depressivit__t_z_score",
                "clinic_sample_var": "depressivit__t_z_score",
                "items": 6
            }, {
                "left_title": "Unsicherheit im Sozialkontakt",
                "left_text": "",
                "right_title": "",
                "right_text": "Unzulänglichkeits- und Minderwertigkeitsgefühle, Selbstabwertungen im sozialen Kontakt, Selbstzweifel, Selbstunsicherheit.",
                "score_path": "all_results.unsicherheit_im_sozialkontakt_z_score",
                "clinic_sample_var": "unsicherheit_im_sozialkontakt_z_score",
                "items": 4
            }, {
                "left_title": "Zwanghaftigkeit",
                "left_text": "",
                "right_title": "",
                "right_text": "Gedanken, Impulse und Handlungen, die konstant vorhanden und nicht änderbar und ich-fremd oder ungewollt erlebt werden, Kognitive Leistungsstörungen.",
                "score_path": "all_results.zwanghaftigkeit_z_score",
                "clinic_sample_var": "zwanghaftigkeit_z_score",
                "items": 6
            }, {
                "left_title": "GSI",
                "left_text": "Global Severity Index",
                "right_title": "",
                "right_text": "Durchschnittliche Belastung in allen Bereichen",
                "score_path": "all_results.gsi_global_severity_index_z_score",
                "clinic_sample_var": "gsi_global_severity_index_z_score",
                "items": 53
            }],
            "ranges": [{
                "range_start": -999,
                "range_stop": 1,
                "text": "Gesunde Ausprägung",
                "color": "#2E7D32"
            }, {
                "range_start": 2,
                "range_stop": 999,
                "text": "Starke Ausprägung",
                "color": "#C62828"
            }]
        };




        // ------------------------------------------
        // PDF
        // ------------------------------------------


        calc.pdfmake_chart_zscore = function(scores, definition) {


            var _init = function(scores, definition) {
                var d = {};

                if ("options" in definition) {
                    d.options = definition.options;
                } else {
                    d.options = {
                        "min": 0,
                        "max": 10,
                        "item_height": 60,
                        "item_text_left": 68,
                        "item_text_right": 68,
                        "color_grid": "#E0E0E0",
                        "color_clinic_sample": "#888888",
                        "color_skin": "grey_dark_to_light",
                        "show_baseline": false,
                        "show_scale_text": true,
                        "show_score_vertical_line": false,
                        "show_score_profile_line": true,
                        "show_score_circles": true,
                        "range_alpha": 0.1,
                        "vertical_grid_every_x": 1,
                        "response_title_path": "",
                        "response_date_path": "date"
                    };
                };

                var item_text_left = 100;
                if ("item_text_left" in d.options) {
                    item_text_left = d.options.item_text_left;
                };

                var item_text_right = 100;
                if ("item_text_right" in d.options) {
                    item_text_right = d.options.item_text_right;
                };

                d.options.chart_width = 495 - d.options.item_text_left - d.options.item_text_right;

                var show_scale_text = false;
                if ("show_scale_text" in d.options) {
                    show_scale_text = d.options.show_scale_text;
                };

                var color_grid = "#E0E0E0";
                if ("color_grid" in d.options) {
                    color_grid = d.options.color_grid;
                };

                var chart_width = 280;
                if ("chart_width" in d.options) {
                    chart_width = d.options.chart_width;
                };


                // SCALES

                if ("scales" in definition) {
                    d.scales = definition.scales;
                };


                // RANGES

                if ("ranges" in definition) {
                    d.ranges = definition.ranges;
                };


                // Auto Min/Max
                d.options.do_min = false;
                if ((d.options.min === 'auto') || (d.options.min === undefined)) {
                    d.options.do_min = true;
                } else {
                    d.options.item_min = parseInt(d.options.min);
                };

                d.options.do_max = false;
                if ((d.options.max === 'auto') || (d.options.max === undefined)) {
                    d.options.do_max = true;
                } else {
                    d.options.item_max = parseInt(d.options.max);
                };



                // Scores / Data
                d.scores = scores;
                if (d.scores.length > 0) {
                    d.have_data = true;

                    d = _scales_scores(scores, d);

                    // Min / Max
                    if (d.options.do_max || d.options.do_min) {
                        d = _autoMinMax(d);
                        console.log('min_max', d);
                        // this.set('d.item_min', min_max.item_min);
                        // this.set('d.item_max', min_max.item_max);
                    };

                } else {
                    d.have_data = false;
                };





                console.warn('_init', d, scores);
                return d;
            };

            var _scales_text = function(d) {

                // INIT

                var _scales_text = {
                    "stack": [],
                };

                if (d.scales.length > 0) {

                    d.scales.forEach(function(scale, scaleID) {

                        var left_text = [];
                        var right_text = [];


                        // Build :: Left
                        if (scale.left_title !== "") {
                            if ((scale.left_text !== "") && d.options.show_scale_text) {
                                var title = {
                                    "text": scale.left_title + ": ",
                                    "bold": true
                                };

                                var text = {
                                    "text": scale.left_text,
                                    "bold": false
                                };

                                left_text.push(title);
                                left_text.push(text);
                            } else {
                                var title = {
                                    "text": scale.left_title,
                                    "bold": true
                                };
                                left_text.push(title);
                            };
                        } else {
                            if (scale.left_text !== "") {

                                var text = {
                                    "text": scale.left_text,
                                    "bold": false
                                };

                                left_text.push(text);
                            }
                        };


                        // Build :: Right
                        if (scale.right_title !== "") {
                            if ((scale.right_text !== "") && d.options.show_scale_text) {
                                var title = {
                                    "text": scale.right_title + ": ",
                                    "bold": true
                                };

                                var text = {
                                    "text": scale.right_text,
                                    "bold": false
                                };

                                right_text.push(title);
                                right_text.push(text);
                            } else {
                                var title = {
                                    "text": scale.right_title,
                                    "bold": true
                                };
                                right_text.push(title);
                            };
                        } else {
                            if (scale.right_text !== "") {

                                var text = {
                                    "text": scale.right_text,
                                    "bold": false
                                };

                                right_text.push(text);
                            }
                        };



                        var column_scale = {
                            "columns": [{
                                    "width": d.options.item_text_left,
                                    "style": "chart_p",
                                    "alignment": "right",
                                    "text": left_text
                                },
                                {
                                    "width": "*",
                                    "text": ""
                                },
                                {
                                    "width": d.options.item_text_right,
                                    "style": "chart_p",
                                    "alignment": "left",
                                    "text": right_text
                                }
                            ],
                            "relativePosition": {
                                "x": 0,
                                "y": scaleID * d.options.item_height
                            },
                            "columnGap": 10
                        };

                        _scales_text.stack.push(column_scale);


                    });

                };


                return _scales_text;
            };

            var _grid = function(d) {

                // INIT




                var _grid = {
                    "stack": [],
                };


                var _grid_inner = {
                    "relativePosition": {
                        "x": d.options.item_text_left + 10,
                        "y": 0
                    },
                    "canvas": [{
                        "type": "rect",
                        "x": 0,
                        "y": 0,
                        "w": d.options.chart_width,
                        "h": d.scales.length * d.options.item_height,
                        "lineColor": d.options.color_grid
                    }]
                };


                // Horizontal Line
                if (d.scales.length > 0) {

                    d.scales.forEach(function(scale, scaleID) {

                        var horizontal_line = {
                            "type": "line",
                            "x1": 0,
                            "y1": scaleID * d.options.item_height,
                            "x2": d.options.chart_width,
                            "y2": scaleID * d.options.item_height,
                            "lineWidth": 1,
                            "lineColor": d.options.color_grid
                        };

                        if (scaleID !== 0) {
                            _grid_inner.canvas.push(horizontal_line);
                        };


                    });

                };

                // Vertical Line


                _grid.stack.push(_grid_inner);


                return _grid;
            };

            var _scales_scores = function(scores, init) {



                init.scales.forEach(function(scale, scaleID) {

                    scale.scores = [];
                    scale.id = scaleID;

                    if ((scores !== undefined) && (scores !== null)) {
                        scores.forEach(function(score, scoreID) {
                            // Get Values

                            var score_obj = {
                                "value": null
                            };

                            // Get Values
                            if (scale.score_path) {
                                score_obj.value = _getDataPath(score, scale.score_path);
                            };

                            if (init.options.response_title_path) {
                                score_obj.title = _getDataPath(score, init.options.response_title_path);
                            } else {
                                score_obj.title = 'Unbekannt'
                            };

                            if (init.options.response_date_path) {
                                score_obj.date = _getDataPath(score, init.options.response_date_path);
                            } else {
                                score_obj.date = null
                            };

                            scale.scores.push(score_obj);


                        });
                    };

                });

                // Check in scales/scores
                // all_scales.forEach(function(scale, scaleID) {
                //     scale.scores.forEach(function(score, scoreID) {
                //         if (do_min) {
                //             if (score.value < d.item_min) {
                //                 d.item_min = score.value;
                //             };
                //         };
                //         if (do_max) {
                //             if (score.value > d.item_max) {
                //                 d.item_max = score.value;
                //             };
                //         };
                //     });
                // });

                //Round a number upward to its nearest integer:


                return init;
            };

            var _getDataPath = function(current_score, path) {
                var data_dive = JSON.parse(JSON.stringify(current_score));
                var dots_count = (path.split(".").length - 1);

                if (dots_count === 0) {
                    return data_dive[path]
                };

                var dive = [];
                for (i = 0; i < dots_count; i++) {
                    var n = path.indexOf(".");
                    var item = path.substring(0, n);
                    path = path.substring(n + 1, path.length);
                    dive.push(item);
                    if (i === dots_count - 1) {
                        dive.push(path);
                    };
                };

                var return_value = null;

                //console.log('__getScorePath', data_dive, dive);

                for (i = 0; i < dive.length; i++) {
                    data_dive = data_dive[dive[i]];
                    if (i === dots_count) {
                        return_value = data_dive;

                        return return_value;
                    };
                };
            };

            var _autoMinMax = function(data) {

                var d = JSON.parse(JSON.stringify(data));


                // Init
                if (d.options.do_min) {
                    d.options.item_min = 0;
                };
                if (d.options.do_max) {
                    d.options.item_max = 0;
                };


                // Check in scales/scores
                d.scales.forEach(function(scale, scaleID) {
                    scale.scores.forEach(function(score, scoreID) {
                        if (d.options.do_min) {
                            if (score.value < d.options.item_min) {
                                d.options.item_min = score.value;
                            };
                        };
                        if (d.options.do_max) {
                            if (score.value > d.options.item_max) {
                                d.options.item_max = score.value;
                            };
                        };
                    });
                });


                //Round a number upward to its nearest integer:

                if (d.options.do_min) {
                    if (d.options.item_min < 0) {
                        d.options.item_min = Math.ceil(Math.abs(d.options.item_min)) + 1;
                        d.options.item_min = d.options.item_min * -1;
                    } else {
                        d.options.item_min = Math.ceil(Math.abs(d.options.item_min)) + 1;
                    };
                    if (d.options.item_min > 0) {
                        d.options.item_min = 0
                    };
                } else {
                    d.options.item_min = d.options.min;
                };

                if (d.options.do_max) {
                    if (d.options.item_max < 0) {
                        d.options.item_max = Math.ceil(Math.abs(d.options.item_max)) + 1;
                        d.options.item_max = d.options.item_max * -1;
                    } else {
                        d.options.item_max = Math.ceil(Math.abs(d.options.item_max)) + 1;
                    };
                } else {
                    d.options.item_max = d.options.max;
                };

                d.options.min_max_range = d.options.item_max - d.options.item_min;

                return d;
            };


            // Run
            var init = _init(scores, definition);


            // console.warn('START: pdfmake_chart_zscore (scores, definition)', scores, definition, init);



            // Build Chart

            var chart_stack = [];

            if (init.have_data === true) {
                chart_stack.push(_scales_text(init));
                chart_stack.push(_grid(init));
            };




            // Add a Spacer so following content will not overwrite chart
            var spacer = {
                "canvas": [{
                    "type": "rect",
                    "x": -3,
                    "y": 0,
                    "w": 0,
                    "h": init.scales.length * init.options.item_height,
                    "lineColor": "#FFFFFF"
                }]
            };
            chart_stack.push(spacer);


            var example_chart_grid = {
                "stack": [{
                        "relativePosition": {
                            "x": 118,
                            "y": 0
                        },
                        "canvas": [{
                            "type": "rect",
                            "x": 0,
                            "y": 0,
                            "w": 280,
                            "h": 120,
                            "lineColor": "#E0E0E0"
                        }]
                    },
                    {
                        "stack": [{
                                "columns": [{
                                        "width": 110,
                                        "style": "chart_p",
                                        "alignment": "right",
                                        "text": [{
                                                "text": "Links: ",
                                                "bold": true
                                            },
                                            {
                                                "text": "Dies ist die Beschreibung von einem sehr sehr sehr laaaangen Texten",
                                                "bold": false
                                            }
                                        ]
                                    },
                                    {
                                        "width": "*",
                                        "text": ""
                                    },
                                    {
                                        "width": 110,
                                        "style": "chart_p",
                                        "alignment": "left",
                                        "text": [{
                                                "text": "Rechts: ",
                                                "bold": true
                                            },
                                            {
                                                "text": "Dies ist die Beschreibung",
                                                "bold": false
                                            }
                                        ]
                                    }
                                ],
                                "relativePosition": {
                                    "x": 0,
                                    "y": 0
                                },
                                "columnGap": 10
                            },
                            {
                                "columns": [{
                                        "width": 110,
                                        "style": "chart_p",
                                        "alignment": "right",
                                        "text": [{
                                                "text": "Links: ",
                                                "bold": true
                                            },
                                            {
                                                "text": "Dies ist die Beschreibung von laaaangen Texten",
                                                "bold": false
                                            }
                                        ]
                                    },
                                    {
                                        "width": "*",
                                        "text": ""
                                    },
                                    {
                                        "width": 110,
                                        "style": "chart_p",
                                        "alignment": "left",
                                        "text": [{
                                                "text": "Rechts: ",
                                                "bold": true
                                            },
                                            {
                                                "text": "Dies ist die Beschreibung",
                                                "bold": false
                                            }
                                        ]
                                    }
                                ],
                                "relativePosition": {
                                    "x": 0,
                                    "y": 40
                                },
                                "columnGap": 10
                            }
                        ]
                    }
                ]
            };


            // Keep Chart together
            var chart = {
                "id": "chart_bscl",
                "layout": "noBorders",
                "table": {
                    "dontBreakRows": true,
                    "headerRows": 0,
                    "body": [
                        [{
                            "stack": chart_stack
                        }]
                    ]
                }
            };


            var chart_debug = {};
            chart_debug.chart = chart;
            chart_debug.init = init;

            // console.warn('pdfmake_problemsubstanzen', d);
            console.log(JSON.stringify(chart, null, 2));

            return chart_debug;
        };


        // ------------------------------------------
        // F U N C T I O N  -  Main
        // ------------------------------------------
        calc.getResults = function(d) {


            var return_obj = {};

            var scores = d.other_calculations['ch.suedhang.apps.bscl_anq:scores_calculation'];


            return_obj.chart = calc.pdfmake_chart_zscore(scores, calc.chart);

            return return_obj;
        };


        // ------------------------------------------
        // H e l p e r   -   F U N C T I O N S
        // ------------------------------------------

        // CH Datumsformat
        calc.formatDateCH = function(date_string) {
            date_string = date_string || null
            if (date_string !== null) {

                // 1952-11-19T00:00:00.000000000000Z
                var year = parseInt(date_string.substring(0, 4));
                var month = parseInt(date_string.substring(5, 7));
                var day = parseInt(date_string.substring(8, 10));
                var date_string_return = day + "." + month + "." + year

                return date_string_return;
            } else {
                return null;
            }
        };


        calc.cloneObj = function(my_obj) {
            // Clone Obj. and Return
            return JSON.parse(JSON.stringify(my_obj));
        };

        calc.getObjProp = function(my_obj) {
            // Create 'all propertys array'
            var allFullPropertys = [];

            for (var property in my_obj) {
                if (my_obj.hasOwnProperty(property)) {
                    allFullPropertys.push(property);
                }
            }

            return allFullPropertys;
        };

        calc.roundToTwo = function(num) {
            // Round a Number to 0.X 
            return +(Math.round(num + "e+2") + "e-2");
        };

        calc.isArray = function(obj) {
            return (typeof obj !== 'undefined' &&
                obj && obj.constructor === Array);
        };

        calc.merge_obj = function(obj1, obj2) {
            var obj3 = {};
            for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
            for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
            return obj3;
        }


        // Return
        return calc.getResults(responses);




        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
        // Copy | Paste Until here

    };
    return calculation;
});
