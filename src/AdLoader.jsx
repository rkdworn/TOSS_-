import React, { useEffect } from 'react';
import { loadFullScreenAd } from '@apps-in-toss/web-framework';

const AD_GROUP_ID = 'ait.v2.live.ca37025061ab4c5f';

// 통합 전면 광고 사전 로더
export default function AdLoader({ onLoaded, onError }) {
  useEffect(() => {
    if (!loadFullScreenAd.isSupported()) {
      if (onError) onError();
      return undefined;
    }

    const cleanup = loadFullScreenAd({
      options: { adGroupId: AD_GROUP_ID },
      onEvent: (event) => {
        if (event.type === 'loaded') {
          if (onLoaded) onLoaded();
        }
      },
      onError: (error) => {
        console.warn('전면 광고 로드 실패:', error);
        if (onError) onError(error);
      },
    });

    return () => {
      cleanup();
    };
  }, [onLoaded, onError]);

  return null;
}
