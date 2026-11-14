
export default function Main ({ipInfo}){

    return(
        
    <main>
        <div id="ip-map" ></div>
        {!ipInfo ? <p>Loading...</p> : (
        <div id="result-section">
                
                    <dl aria-live="polite" aria-atomic="true">
                        <div className="ip-info">
                        <dt>IP ADDRESS</dt>
                        <dd id="addressValue" >{ipInfo.ip}</dd>
                        </div>

                        <div className="ip-info">
                        <dt>LOCATION</dt>
                        <dd id="locationValue"> {ipInfo.location.city}, {ipInfo.location.region}</dd>
                        </div>

                        <div className="ip-info">
                        <dt>TIMEZONE</dt>
                        <dd id="timezoneValue" > UTC {ipInfo.location.timezone}</dd>
                        </div>

                        <div className="ip-info">
                        <dt>ISP</dt>
                        <dd id="ispValue">{ipInfo.isp}</dd>
                        </div>
                    </dl>
                    
                
            

                </div>
        )}
    </main>
    )
}