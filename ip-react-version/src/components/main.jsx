
export default function Main (ipInfo){
    const {address, ipLocation, timezone, isp}=ipInfo 
    // location needs location.city and location.region
    // timzone is location.timezeone
  

    return(
        
    <main>
        <div id="ip-map" ></div>
        <div id="result-section">
                
                    <dl aria-live="polite" aria-atomic="true">
                        <div class="ip-info">
                        <dt>IP ADDRESS</dt>
                        <dd id="addressValue" >{ipInfo.ip}</dd>
                        </div>

                        <div class="ip-info">
                        <dt>LOCATION</dt>
                        <dd id="locationValue" >{ipInfo.location.city}, {ipInfo.location.region}</dd>
                        </div>

                        <div class="ip-info">
                        <dt>TIMEZONE</dt>
                        <dd id="timezoneValue" >"UTC" {ipInfo.location.timezone}</dd>
                        </div>

                        <div class="ip-info">
                        <dt>ISP</dt>
                        <dd id="ispValue">{ipInfo.isp}</dd>
                        </div>
                    </dl>
                    
                
            

                </div>

    </main>
    )
}