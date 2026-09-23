import React, { useEffect, useRef } from 'react';
import { showFullScreenAd } from '@apps-in-toss/web-framework';

const AD_GROUP_ID = 'ait.v2.live.ca37025061ab4c5f';

// 통합 전면 광고 표시 컴포넌트
export default function AdScreen({ onClose }) {
  const hasClosedRef = useRef(false);

  const safeClose = () => {
    if (!hasClosedRef.current) {
      hasClosedRef.current = true;
      if (onClose) onClose();
    }
  };

  useEffect(() => {
    if (!showFullScreenAd.isSupported()) {
      safeClose();
      return undefined;
    }

    const cleanup = showFullScreenAd({
      options: { adGroupId: AD_GROUP_ID },
      onEvent: (event) => {
        if (
          event.type === 'dismissed' ||
          event.type === 'failedToShow' ||
          event.type === 'userEarnedReward'
        ) {
          safeClose();
        }
      },
      onError: (error) => {
        console.warn('전면 광고 표시 실패:', error);
        safeClose();
      },
    });

    return () => {
      cleanup();
    };
  }, []);

  return null;
}
