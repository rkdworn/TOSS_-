
import React from 'react';
import { Asset, Text, BottomCTA, CTAButton, Spacing } from '@toss/tds-mobile';
import { adaptive } from '@toss/tds-colors';

export default function Army1({ onBack, onNext }) {
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

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 150, marginTop: 50 }}>
          <Asset.Icon
            frameShape={Asset.frameShape.CleanW100}
            backgroundColor="transparent"
            name="icon-mountain-fill3"
            aria-hidden={true}
            ratio="1/1"
          />
          <Spacing size={24} />
          <Text
            display="block"
            color="#191F28"
            typography="t2"
            fontWeight="bold"
            textAlign="center"
          >
            육군 · 해병대 18개월을<br />기준으로 계산할게요
          </Text>
        </div>
      </div>

      {/* Fixed Bottom CTA (Toss 스타일) */}
      <div style={{ marginTop: 'auto', marginBottom: 24 }}>
        <BottomCTA.Double
          leftButton={
            <CTAButton
              color="dark"
              variant="weak"
              onClick={onBack}
            >
              이전
            </CTAButton>
          }
          rightButton={
            <CTAButton onClick={onNext}>
              확인했어요
            </CTAButton>
          }
        />
      </div>
    </div>
  );
}
