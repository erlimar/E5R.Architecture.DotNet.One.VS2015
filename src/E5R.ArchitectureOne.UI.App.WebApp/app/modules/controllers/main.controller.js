define(function (require, exports, module) {

    module.exports = MainController;

    MainController.$name$ = 'MainController';

    MainController.$inject = [
        'UtilService'
    ];

    /**
     * @constructor

     * @param {UtilService} util
     */
    function MainController(util) {
        var self = this;

        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        var afterTomorrow = new Date(tomorrow);
        afterTomorrow.setDate(tomorrow.getDate() + 1);

        this.message = util.getMessage();

        this.options = {
            customClass: getDayClass,
            minDate: new Date(),
            showWeeks: true
        };

        this.events = [
            {
                date: tomorrow,
                status: 'full'
            },
            {
                date: afterTomorrow,
                status: 'partially'
            }
        ];

        this.today = _today;
        this.clear = _clear;
        this.toggleMin = _toggleMin;
        this.setDate = _setDate;

        this.today();
        this.toggleMin();

        // Disable weekend selection
        function disabled(data) {
            var date = data.date,
                mode = data.mode;
            return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
        }

        function getDayClass(data) {
            var date = data.date,
                mode = data.mode;
            if (mode === 'day') {
                var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

                for (var i = 0; i < self.events.length; i++) {
                    var currentDay = new Date(self.events[i].date).setHours(0, 0, 0, 0);

                    if (dayToCheck === currentDay) {
                        return self.events[i].status;
                    }
                }
            }

            return '';
        }
    }

    /**
     * Seta a data pra hoje
     */
    function _today() {
        this.dt = new Date();
    }
    

    /**
     * Limpa a data
     */
    function _clear() {
        this.dt = null;
    };

    /**
     * Alterna a data mínima. Para hoje e NULL
     */
    function _toggleMin() {
        this.options.minDate = this.options.minDate ? null : new Date();
    };

    /**
     * Atribui uma data específica
     *
     * @param {number} year
     * @param {number} month
     * @param {number} day
     */
    function _setDate(year, month, day) {
        this.dt = new Date(year, month, day);
    };
});
