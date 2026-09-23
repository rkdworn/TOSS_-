import React from 'react';
import { Asset, Text, BottomCTA } from '@toss/tds-mobile';

export default function EndScreen({ onBack, onRestart }) {
  return (
    <div
      style={{
        width: '100vw',
        height: '100dvh',
        minHeight: '100dvh',
        margin: 0,
        padding: 0,
        backgroundColor: 'var(--token-tds-color-white, var(--adaptiveBackground, #fff))',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
      }}
    >
      {/* Toss 공통 네비게이션 바만 노출 (직접 구현 코드 제거) */}
      {/* Main Content (이모지 이미지) */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Asset.Image
            frameShape={Asset.frameShape.CleanW250}
            backgroundColor="transparent"
            src="https://static.toss.im/3d-emojis/u1F31E.png"
            aria-hidden={true}
            style={{
              aspectRatio: '1/1',
              width: 250,
              height: 250,
              borderRadius: 0,
              opacity: 1,
              backdropFilter: 'blur(0px)',
            }}
          />
          <Text
            color="#333D4Bff"
            typography="st8"
            fontWeight="bold"
            textAlign="center"
            style={{
              fontSize: 19,
              borderRadius: 0,
              opacity: 1,
              backdropFilter: 'blur(0px)',
              marginTop: 32,
            }}
          >
            건강한 군생활 하시기를 응원할게요!
          </Text>
          <Text
            color="#333D4Bff"
            typography="st8"
            fontWeight="bold"
            textAlign="center"
            style={{
              fontSize: 19,
              borderRadius: 0,
              opacity: 1,
              backdropFilter: 'blur(0px)',
              marginTop: 8,
            }}
          >
            필요하시면 언제든 찾아주세요!
          </Text>
        </div>
      </div>
      <div style={{ marginTop: 'auto', marginBottom: 24, padding: '0 16px' }}>
        <BottomCTA.Single onClick={onRestart ? onRestart : onBack}>
          다시 계산하기
        </BottomCTA.Single>
      </div>
    </div>
  );
}
