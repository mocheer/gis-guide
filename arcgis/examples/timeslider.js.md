    // 时间滑块示例
    function SetSlider() {
        //时间滑块创建和设置 
        timeSlider = new esri.dijit.TimeSlider({
            style: "width: 800px;",
            id: 'timeSlider'
        }, dojo.byId("timeslider"));

        timeSlider.setThumbCount(1);

        timeExtent = imageLayer.timeInfo.timeExtent;
        timeSlider.createTimeStopsByTimeInterval(timeExtent, 10, 'esriTimeUnitsMinutes');

        timeSlider.setThumbMovingRate(2000);
        timeSlider.singleThumbAsTimeInstant(true);

        //设置Tick的标签 
        var labels = dojo.map(timeSlider.timeStops, function (timeStop, i) {
            if (i === 0) {
                return timeStop.getUTCHours();
            } else if (i === timeSlider.timeStops.length - 1) {
                return timeStop.getUTCHours();
            } else {
                return "";
            }
        });

        timeSlider.setLabels(labels);
        timeSlider.startup();
        Map.setTimeSlider(timeSlider);

    }