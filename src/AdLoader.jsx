import React, { useEffect } from 'react';
import { loadFullScreenAd } from '@apps-in-toss/web-framework';

const AD_GROUP_ID = 'ait.v2.live.ca37025061ab4c5f';

// 보상형 광고 로드 (IntegratedAd v2)
export default function AdLoader({ onLoaded }) {
  useEffect(() => {
    if (!loadFullScreenAd.isSupported()) {
      if (onLoaded) onLoaded();
      return undefined;
    }

    const cleanup = loadFullScreenAd({
      options: { adGroupId: AD_GROUP_ID },
      onEvent: (event) => {
        if (event.type === 'loaded') {
          if (onLoaded) onLoaded();
        }
      },
      onError: () => {
        if (onLoaded) onLoaded();
      },
    });

    return () => {
      cleanup();
    };
  }, [onLoaded]);

  return null;
}
