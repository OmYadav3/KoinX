// TradingViewWidget.jsx
import React, { useEffect, useRef, memo, useState } from 'react';

function TradingViewWidget(props) {
  const[prevScript, setPrevScript] = useState();


  const container = useRef();

  useEffect(
    () => {
      if(prevScript ){
        container.current.remove(prevScript);
      }
      if(!props.symbol) return ;
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbols":"${props.symbol}",
          "chartOnly": false,
          "width": "${props.width}",
          "height": "${props.height}",
          "locale": "en",
          "colorTheme": "light",
          "autosize": true,
          "showVolume": false,
          "showMA": true,
          "hideDateRanges": ${props.hideDateRanges},
          "hideMarketStatus": true,
          "hideSymbolLogo": false,
          "scalePosition": "left",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": ${props.fontsize},
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "lineWidth": 2,
          "lineType": 0,
          "dateRanges":  [
            "1d|1",
            "1w|15",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ]
        }`;
      container.current.appendChild(script);
      setPrevScript(script);  
    },
    [props.width, props.height]
  );

  return (
    <div className="tradingview-widget-container " ref={container}>
      <div className="tradingview-widget-container__widget w-[8rem] h-[8rem]"></div>
      {/* <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div> */}
    </div>
  );
}

export default memo(TradingViewWidget);