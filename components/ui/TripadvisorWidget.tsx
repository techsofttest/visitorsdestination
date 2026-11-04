"use client";

import { useEffect, useRef } from "react";

export function TripadvisorWidget({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Isolate TripAdvisor widget in a sandboxed iframe to prevent its external CSS
    // (.hidden { display: none }) from breaking main site layout.
    const iframe = document.createElement("iframe");
    iframe.style.width = "100%";
    iframe.style.minWidth = "240px";
    iframe.style.height = "255px";
    iframe.style.border = "none";
    iframe.style.overflow = "hidden";
    iframe.scrolling = "no";
    iframe.title = "TripAdvisor Reviews";

    const iframeHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <base target="_blank">
          <style>
            * {
              box-sizing: border-box;
            }
            body {
              margin: 0;
              padding: 0;
              background: transparent;
              overflow: hidden;
              font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            }
            #CDSWIDWRL .widWRLData {
              border-radius: 8px;
            }
          </style>
        </head>
        <body>
          <div id="TA_cdswritereviewlgvi339" class="TA_cdswritereviewlgvi">
            <ul id="soQpzY" class="TA_links Tju4DlqHB">
              <li id="nLevXlk" class="ED8KEZ">
                <a target="_blank" href="https://www.tripadvisor.com/UserReview-g294013-d26530014-Visitors_Destination_Tours_Safari-Abu_Dhabi_Emirate_of_Abu_Dhabi.html">
                  <img src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg" alt="TripAdvisor"/>
                </a>
              </li>
            </ul>
          </div>
          <script async src="https://www.jscache.com/wejs?wtype=cdswritereviewlgvi&amp;uniq=339&amp;locationId=26530014&amp;lang=en_US&amp;lang=en_US&amp;display_version=2" data-loadtrk onload="this.loadtrk=true"></script>
          <script>
            // Automatically adjust iframe height to match TripAdvisor's rendered widget
            function updateHeight() {
              var widget = document.getElementById('CDSWIDWRL');
              if (widget) {
                var h = widget.offsetHeight || document.body.scrollHeight;
                if (h > 50 && window.parent) {
                  window.parent.postMessage({ type: 'TA_RESIZE', height: h }, '*');
                }
              }
            }
            var observer = new MutationObserver(updateHeight);
            observer.observe(document.body, { childList: true, subtree: true });
            setInterval(updateHeight, 400);
          </script>
        </body>
      </html>
    `;

    container.innerHTML = "";
    container.appendChild(iframe);

    // Listen for resize messages from inside iframe
    function onMessage(e: MessageEvent) {
      if (e.data && e.data.type === "TA_RESIZE" && typeof e.data.height === "number") {
        iframe.style.height = `${e.data.height + 4}px`;
      }
    }
    window.addEventListener("message", onMessage);

    const doc = iframe.contentWindow?.document || iframe.contentDocument;
    if (doc) {
      doc.open();
      doc.write(iframeHtml);
      doc.close();
    }

    return () => {
      window.removeEventListener("message", onMessage);
    };
  }, []);

  return <div ref={containerRef} className={`w-full max-w-[270px] ${className}`} />;
}
