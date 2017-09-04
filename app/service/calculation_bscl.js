angular.module('optinomicCalculation').factory('calculation', function() {

    var calculation = {};

    calculation.main = function(responses) {

        // Copy | Paste From here
        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 




        var calc = {};


        // ------------------------------------------
        // D e f i n i t i o n s
        // ------------------------------------------


        calc.result_types = ["sum_score", "scale_score", "z_score"];

        calc.result_array = [{
            "id": 0,
            "description": "GSI (Global Severity Index)",
            "sub_left": "GSI (Global Severity Index)",
            "sub_right": "Durchschnittliche Belastung in allen Bereichen",
            "m_norm": [0.28, 0.35],
            "sd_norm": [0.23, 0.23],
            "items": 53
        }, {
            "id": 1,
            "description": "Psychotizismus",
            "sub_left": "Psychotizismus",
            "sub_right": "Gefühl der Isolation und zwischenmenschlichen Entfremdung. Verzerrter, isolierter Lebensstil bis zu Halluzination und Gedankenzerfall.",
            "m_norm": [0.19, 0.19],
            "sd_norm": [0.28, 0.27],
            "items": 5
        }, {
            "id": 2,
            "description": "Paranoides Denken",
            "sub_left": "Paranoides Denken",
            "sub_right": "Misstrauen, Minderwertigkeitsgefühle, paranoides Denken: Gedankenprojektion, Feindseligkeit, Argwohn, Grandiosität, Einengung, Angst vor Autonomieverlust und wahnhafte Täuschung.",
            "m_norm": [0.33, 0.34],
            "sd_norm": [0.40, 0.38],
            "items": 5
        }, {
            "id": 3,
            "description": "Phobische Angst",
            "sub_left": "Phobische Angst",
            "sub_right": "Andauernde und unangemessene Furcht als Reaktion auf eine bestimmte Person, einen Platz, ein Objekt oder eine charakteristische Situation, die zu Vermeidungs- oder Fluchtverhalten führt.",
            "m_norm": [0.14, 0.16],
            "sd_norm": [0.23, 0.25],
            "items": 5
        }, {
            "id": 4,
            "description": "Aggressivität / Feindseligkeit",
            "sub_left": "Aggressivität / Feindseligkeit",
            "sub_right": "Reizbarkeit und Unausgeglichenheit bis hin zu starker Aggressivität. Ärger, Aggression, Irritierbarkeit, Zorn und Verstimmung.",
            "m_norm": [0.29, 0.37],
            "sd_norm": [0.35, 0.33],
            "items": 5
        }, {
            "id": 5,
            "description": "Ängstlichkeit",
            "sub_left": "Ängstlichkeit",
            "sub_right": "Angst mit Nervosität, Spannungen und Zittern, Panikattacken und Schreckgefühlen, Gefühle von Besorgnis und Furcht.",
            "m_norm": [0.29, 0.39],
            "sd_norm": [0.31, 0.36],
            "items": 6
        }, {
            "id": 6,
            "description": "Depressivität",
            "sub_left": "Depressivität",
            "sub_right": "Gedrückte Stimmung, Gesunkenes Interesse am Leben, Verringerte Motivation und Energie, Hoffnungslosigkeit, bis hin zu Suizidgedanken.",
            "m_norm": [0.24, 0.33],
            "sd_norm": [0.32, 0.40],
            "items": 6
        }, {
            "id": 7,
            "description": "Unsicherheit im Sozialkontakt",
            "sub_left": "Unsicherheit im Sozialkontakt",
            "sub_right": "Unzulänglichkeits- und Minderwertigkeitsgefühle, Selbstabwertungen im sozialen Kontakt, Selbstzweifel, Selbstunsicherheit und negative Erwartungen bzgl. dem eigenen zwischenmenschlichen Verhalten.",
            "m_norm": [0.35, 0.49],
            "sd_norm": [0.40, 0.45],
            "items": 4
        }, {
            "id": 8,
            "description": "Zwanghaftigkeit",
            "sub_left": "Zwanghaftigkeit",
            "sub_right": "Gedanken, Impulse und Handlungen, die konstant vorhanden und nicht änderbar und ich-fremd oder ungewollt erlebt werden, Kognitive Leistungsstörungen.",
            "m_norm": [0.50, 0.54],
            "sd_norm": [0.46, 0.43],
            "items": 6
        }, {
            "id": 9,
            "description": "Somatisierung",
            "sub_left": "Somatisierung",
            "sub_right": "Kopfschmerzen, Herzbeschwerden, Atemprobleme, Magenbeschwerden, Muskelschmerzen, Schwächegefühl, Schweregefühl, Unwohlsein usw.",
            "m_norm": [0.23, 0.32],
            "sd_norm": [0.31, 0.33],
            "items": 7
        }, {
            "id": 10,
            "description": "Zusatzitems",
            "sub_left": "Zusatzitems",
            "sub_right": "Zusatzitems",
            "m_norm": [null, null],
            "sd_norm": [null, null],
            "items": 4
        }];


        // ------------------------------------------
        // H e l p e r   -   F U N C T I O N S
        // ------------------------------------------

        calc.set_result_array = function(result_array) {

            function deUmlaut(value) {
                value = value.toLowerCase();
                value = value.replace(/ä/g, 'ae');
                value = value.replace(/ö/g, 'oe');
                value = value.replace(/ü/g, 'ue');
                value = value.replace(/ß/g, 'ss');
                value = value.replace(/ /g, '_');
                value = value.replace(/\./g, '');
                value = value.replace(/,/g, '');
                value = value.replace(/\(/g, '');
                value = value.replace(/\)/g, '');
                return value;
            };

            result_array.forEach(function(d, myResultID) {
                d.short_description = deUmlaut(d.description);
                d.short_description = d.short_description.replace(/[^a-z0-9]/gi, '_').toLowerCase();

                d.result = {};
                var name = "";
                calc.result_types.forEach(function(typ, myTypID) {
                    name = d.short_description + "_" + typ;
                    d.result[typ] = null;
                });

            });


            return result_array;
        };


        calc.create_all_results = function(result_array) {

            var variables = [];
            var variables_inner = [];
            var results = {};


            result_array.forEach(function(d, myResID) {

                calc.result_types.forEach(function(typ, myTypID) {
                    name = d.short_description + "_" + typ;
                    results[name] = d.result[typ];
                    variables.push(name);
                });

            });

            calc.result_types.forEach(function(typ, myTypID) {
                variables_inner.push(typ);
            });


            var return_obj = {
                "all_variables": variables,
                "variables": variables_inner,
                "all_results": results
            };


            return return_obj;
        };


        // ------------------------------------------
        // PDF
        // ------------------------------------------


        calc.bscl_chart_z_score = function(data) {

            console.warn('START: bscl_chart_z_score', data);

            


            var bscl = {
                "options": {
                    "min": -4,
                    "max": "auto",
                    "item_height": 50,
                    "item_text_left": 140,
                    "item_text_right": 140,
                    "color_grid": "#9E9E9E",
                    "color_clinic_sample": "#888888",
                    "color_skin": "grey_dark_to_light",
                    "show_baseline": true,
                    "show_scale_text": false,
                    "show_score_vertical_line": false,
                    "show_score_profile_line": true,
                    "show_score_circles": true,
                    "range_alpha": 0.1,
                    "vertical_grid_every_x": 1,
                    "response_title_path": "calculation.scores_calculation.info.mz.mz_typ",
                    "response_date_path": "date"
                },
                "scales": [{
                    "left_title": "Somatisierung",
                    "left_text": "",
                    "right_title": "Somatisierung",
                    "right_text": "Kopfschmerzen, Herzbeschwerden, Atemprobleme, Magenbeschwerden, Muskelschmerzen,     Schwächegefühl, Schweregefühl, Unwohlsein usw.",
                    "m_norm": [0.23, 0.32],
                    "sd_norm": [0.31, 0.33],
                    "score_path": "calculation.scores_calculation.all_results.somatisierung_z_score",
                    "clinic_sample_var": "somatisierung_z_score",
                    "items": 7
                }, {
                    "id": 1,
                    "left_title": "Psychotizismus",
                    "left_text": "",
                    "right_title": "Psychotizismus",
                    "right_text": "Gefühl der Isolation und zwischenmenschlichen Entfremdung. Verzerrter, isolierter Lebensstil     bis zu Halluzination und Gedankenzerfall.",
                    "m_norm": [0.19, 0.19],
                    "sd_norm": [0.28, 0.27],
                    "score_path": "calculation.scores_calculation.all_results.psychotizismus_z_score",
                    "clinic_sample_var": "psychotizismus_z_score",
                    "items": 5
                }, {
                    "left_title": "Paranoides Denken",
                    "left_text": "",
                    "right_title": "Paranoides Denken",
                    "right_text": "Misstrauen, Minderwertigkeitsgefühle, paranoides Denken: Gedankenprojektion, Feindseligkeit,     Argwohn, Grandiosität, Einengung, Angst vor Autonomieverlust und wahnhafte Täuschung.",
                    "m_norm": [0.33, 0.34],
                    "sd_norm": [0.40, 0.38],
                    "score_path": "calculation.scores_calculation.all_results.paranoides_denken_z_score",
                    "clinic_sample_var": "paranoides_denken_z_score",
                    "items": 5
                }, {
                    "left_title": "Phobische Angst",
                    "left_text": "",
                    "right_title": "Phobische Angst",
                    "right_text": "Andauernde und unangemessene Furcht als Reaktion auf eine bestimmte Person, einen Platz, ein     Objekt oder eine charakteristische Situation, die zu Vermeidungs- oder Fluchtverhalten führt.",
                    "m_norm": [0.14, 0.16],
                    "sd_norm": [0.23, 0.25],
                    "score_path": "calculation.scores_calculation.all_results.phobische_angst_z_score",
                    "clinic_sample_var": "phobische_angst_z_score",
                    "items": 5
                }, {
                    "left_title": "Aggressivität / Feindseligkeit",
                    "left_text": "",
                    "right_title": "Aggressivität / Feindseligkeit",
                    "right_text": "Reizbarkeit und Unausgeglichenheit bis hin zu starker Aggressivität. Ärger, Aggression,    Irritierbarkeit, Zorn und Verstimmung.",
                    "m_norm": [0.29, 0.37],
                    "sd_norm": [0.35, 0.33],
                    "score_path": "calculation.scores_calculation.all_results.aggressivit__t___feindseligkeit_z_score",
                    "clinic_sample_var": "aggressivit__t___feindseligkeit_z_score",
                    "items": 5
                }, {
                    "left_title": "Ängstlichkeit",
                    "left_text": "",
                    "right_title": "Ängstlichkeit",
                    "right_text": "Angst mit Nervosität, Spannungen und Zittern, Panikattacken und Schreckgefühlen, Gefühle von Besorgnis und Furcht.",
                    "m_norm": [0.29, 0.39],
                    "sd_norm": [0.31, 0.36],
                    "score_path": "calculation.scores_calculation.all_results.__ngstlichkeit_z_score",
                    "clinic_sample_var": "__ngstlichkeit_z_score",
                    "items": 6
                }, {
                    "left_title": "Depressivität",
                    "left_text": "",
                    "right_title": "Depressivität",
                    "right_text": "Gedrückte Stimmung, Gesunkenes Interesse am Leben, Verringerte Motivation und Energie,     Hoffnungslosigkeit, bis hin zu Suizidgedanken.",
                    "m_norm": [0.24, 0.33],
                    "sd_norm": [0.32, 0.40],
                    "score_path": "calculation.scores_calculation.all_results.depressivit__t_z_score",
                    "clinic_sample_var": "depressivit__t_z_score",
                    "items": 6
                }, {
                    "left_title": "Unsicherheit im Sozialkontakt",
                    "left_text": "",
                    "right_title": "Unsicherheit im Sozialkontakt",
                    "right_text": "Unzulänglichkeits- und Minderwertigkeitsgefühle, Selbstabwertungen im sozialen Kontakt,    Selbstzweifel, Selbstunsicherheit und negative Erwartungen bzgl. dem eigenen zwischenmenschlichen   Verhalten.",
                    "m_norm": [0.35, 0.49],
                    "sd_norm": [0.40, 0.45],
                    "score_path": "calculation.scores_calculation.all_results.unsicherheit_im_sozialkontakt_z_score",
                    "clinic_sample_var": "unsicherheit_im_sozialkontakt_z_score",
                    "items": 4
                }, {
                    "left_title": "Zwanghaftigkeit",
                    "left_text": "",
                    "right_title": "Zwanghaftigkeit",
                    "right_text": "Gedanken, Impulse und Handlungen, die konstant vorhanden und nicht änderbar und ich-fremd oder ungewollt erlebt werden, Kognitive Leistungsstörungen.",
                    "m_norm": [0.50, 0.54],
                    "sd_norm": [0.46, 0.43],
                    "score_path": "calculation.scores_calculation.all_results.zwanghaftigkeit_z_score",
                    "clinic_sample_var": "zwanghaftigkeit_z_score",
                    "items": 6
                }, {
                    "left_title": "GSI",
                    "left_text": "Global Severity Index",
                    "right_title": "GSI (Global Severity Index)",
                    "right_text": "Durchschnittliche Belastung in allen Bereichen",
                    "m_norm": [0.28, 0.35],
                    "sd_norm": [0.23, 0.23],
                    "score_path": "calculation.scores_calculation.all_results.gsi_global_severity_index_z_score",
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

            // Inhalt

            var d = calc.pdfmake_chart_z_score(bscl.options, bscl.scales, bscl.ranges);


            // Abfüllen
            // d.stack.push(titel);


            // console.warn('pdfmake_problemsubstanzen', d);
            console.log(JSON.stringify(d, null, 2));

            return d;
        };

        calc.pdfmake_chart_z_score = function(options, scales, ranges) {

            console.warn('START: pdfmake_chart_z_score', options, scales, ranges);

            var d = {
                "stack": [],
            };


            // Inhalt


            // Abfüllen
            // d.stack.push(titel);


            // console.warn('pdfmake_problemsubstanzen', d);
            console.log(JSON.stringify(d, null, 2));

            return d;
        };

        // ------------------------------------------
        // F U N C T I O N  -  Main
        // ------------------------------------------
        calc.getResults = function(myResponses) {


            var result_array = calc.set_result_array(calc.result_array);


            var allResults = [];
            var currentPatient = myResponses.patient;

            // Gender:  Position
            // 0 = Männer
            // 1 = Frauen
            var gender_pos = 0;
            if (currentPatient.gender === 'male') {
                gender_pos = 0;
            } else {
                gender_pos = 1;
            };


            var responses_array = myResponses.survey_responses;
            responses_array.forEach(function(response, myindex) {
                var d = {};
                d.result_array = calc.cloneObj(result_array);
                var result = response.data.response;


                // -----------------------------------
                // sum_scores
                // -----------------------------------
                d.result_array[1].result.sum_score = parseInt(result['BSCL[sq504V03]']) + parseInt(result['BSCL[sq504V14]']) + parseInt(result['BSCL[sq504V34]']) + parseInt(result['BSCL[sq504V44]']) + parseInt(result['BSCL[sq504V53]']);
                d.result_array[2].result.sum_score = parseInt(result['BSCL[sq504V04]']) + parseInt(result['BSCL[sq504V10]']) + parseInt(result['BSCL[sq504V24]']) + parseInt(result['BSCL[sq504V48]']) + parseInt(result['BSCL[sq504V51]']);
                d.result_array[3].result.sum_score = parseInt(result['BSCL[sq504V08]']) + parseInt(result['BSCL[sq504V28]']) + parseInt(result['BSCL[sq504V31]']) + parseInt(result['BSCL[sq504V43]']) + parseInt(result['BSCL[sq504V47]']);
                d.result_array[4].result.sum_score = parseInt(result['BSCL[sq504V06]']) + parseInt(result['BSCL[sq504V13]']) + parseInt(result['BSCL[sq504V40]']) + parseInt(result['BSCL[sq504V41]']) + parseInt(result['BSCL[sq504V46]']);
                d.result_array[5].result.sum_score = parseInt(result['BSCL[sq504V01]']) + parseInt(result['BSCL[sq504V12]']) + parseInt(result['BSCL[sq504V19]']) + parseInt(result['BSCL[sq504V38]']) + parseInt(result['BSCL[sq504V45]']) + parseInt(result['BSCL[sq504V49]']);
                d.result_array[6].result.sum_score = parseInt(result['BSCL[sq504V09]']) + parseInt(result['BSCL[sq504V16]']) + parseInt(result['BSCL[sq504V17]']) + parseInt(result['BSCL[sq504V18]']) + parseInt(result['BSCL[sq504V35]']) + parseInt(result['BSCL[sq504V50]']);
                d.result_array[7].result.sum_score = parseInt(result['BSCL[sq504V20]']) + parseInt(result['BSCL[sq504V21]']) + parseInt(result['BSCL[sq504V22]']) + parseInt(result['BSCL[sq504V42]']);
                d.result_array[8].result.sum_score = parseInt(result['BSCL[sq504V05]']) + parseInt(result['BSCL[sq504V15]']) + parseInt(result['BSCL[sq504V26]']) + parseInt(result['BSCL[sq504V27]']) + parseInt(result['BSCL[sq504V32]']) + parseInt(result['BSCL[sq504V36]']);
                d.result_array[9].result.sum_score = parseInt(result['BSCL[sq504V02]']) + parseInt(result['BSCL[sq504V07]']) + parseInt(result['BSCL[sq504V23]']) + parseInt(result['BSCL[sq504V29]']) + parseInt(result['BSCL[sq504V30]']) + parseInt(result['BSCL[sq504V33]']) + parseInt(result['BSCL[sq504V37]']);
                d.result_array[10].result.sum_score = parseInt(result['BSCL[sq504V11]']) + parseInt(result['BSCL[sq504V25]']) + parseInt(result['BSCL[sq504V39]']) + parseInt(result['BSCL[sq504V52]']);

                d.result_array[0].result.sum_score =
                    d.result_array[1].result.sum_score +
                    d.result_array[2].result.sum_score +
                    d.result_array[3].result.sum_score +
                    d.result_array[4].result.sum_score +
                    d.result_array[5].result.sum_score +
                    d.result_array[6].result.sum_score +
                    d.result_array[7].result.sum_score +
                    d.result_array[8].result.sum_score +
                    d.result_array[9].result.sum_score +
                    d.result_array[10].result.sum_score;



                // Calculate 'scale_score'  |  'z_score'
                d.result_array.forEach(function(res, myResID) {
                    res.result.scale_score = calc.roundToTwo(res.result.sum_score / res.items);
                    res.result.z_score = calc.roundToTwo((res.result.scale_score - res.m_norm[gender_pos]) / res.sd_norm[gender_pos]);
                });



                // -----------------------------------------------
                // Messzeitpunkt
                // -----------------------------------------------
                var mz = {
                    "mz_id": 99,
                    "mz_typ": 'Undefined',
                    "mz_text": 'Undefined'
                };


                if ("Eintrittsort" in result) {

                    var my_messzeitpunkt = parseInt(result['q501V04']);
                    var my_eintrittsort = parseInt(result['Eintrittsort']);
                    var my_austrittsort = parseInt(result['Austrittsort']);


                    if ((my_messzeitpunkt === 1) && (my_eintrittsort === 1)) {
                        mz.mz_id = 0;
                        mz.mz_typ = 'Eintritt EAS';
                        mz.mz_text = 'Eintritt - EAS';
                    };

                    if ((my_messzeitpunkt === 2) && (my_austrittsort === 2)) {
                        mz.mz_id = 1;
                        mz.mz_typ = 'Austritt EP';
                        mz.mz_text = 'Austritt - EP';
                    };


                    if (my_messzeitpunkt === 3) {
                        mz.mz_id = 2;
                        mz.mz_typ = 'Übertritt EP';
                        mz.mz_text = 'Übertritt EP';
                    };

                    if ((my_messzeitpunkt === 1) && (my_eintrittsort === 2)) {
                        mz.mz_id = 4;
                        mz.mz_typ = 'Eintritt EP';
                        mz.mz_text = 'Eintritt - EP';
                    };


                    if ((my_messzeitpunkt === 2) && (my_austrittsort === 1)) {
                        mz.mz_id = 3;
                        mz.mz_typ = 'Austritt EAS';
                        mz.mz_text = 'Austritt - EAS';
                    };
                };


                // Create 'all_results' Object
                var all_results_obj = calc.create_all_results(d.result_array);
                d.all_results = all_results_obj.all_results;

                // Store Definitions
                d.definitions = {};
                d.definitions.all_results_variables = all_results_obj.all_variables;
                d.definitions.result_array = result_array;
                d.definitions.variables = all_results_obj.variables;

                // Prebuild PDF
                d.pdfmake = {};
                d.pdfmake.chart_zscore = calc.bscl_chart_z_score(d);

                // write results back
                response.data.response_id = response.id;
                d.info = response.data;
                d.info.mz = mz;
                d.info.hash = result['optinomixHASH'];
                allResults.push(d);
            });

            return allResults;
        };


        // ------------------------------------------
        // Helpers
        // ------------------------------------------

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
