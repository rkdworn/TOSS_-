import React, { useEffect } from 'react';
import { showFullScreenAd } from '@apps-in-toss/web-framework';

const AD_GROUP_ID = 'ait.v2.live.ca37025061ab4c5f';

// 보상형 광고 표시 (IntegratedAd v2)
export default function AdScreen({ onClose }) {
  useEffect(() => {
    if (!showFullScreenAd.isSupported()) {
      if (onClose) onClose();
      return undefined;
    }

    const cleanup = showFullScreenAd({
      options: { adGroupId: AD_GROUP_ID },
      onEvent: (event) => {
        if (event.type === 'dismissed' || event.type === 'failedToShow') {
          if (onClose) onClose();
        }
        if (event.type === 'userEarnedReward') {
          if (onClose) onClose();
        }
      },
      onError: () => {
        if (onClose) onClose();
      },
    });

    return () => {
      cleanup();
    };
  }, [onClose]);

  return null;
}
