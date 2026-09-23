import React from 'react';
import { BottomCTA, CTAButton, Text } from '@toss/tds-mobile';

export default function DepositInput({ onBack, onNext }) {
  return (
    <div
      style={{
        width: '100vw',
        height: '100dvh',
        minHeight: '100dvh',
        margin: 0,
        padding: 24,
        backgroundColor: 'var(--token-tds-color-white, #fff)',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
      }}
    >
      <Text typography="t5" fontWeight="semibold" color="#191F28">
        준비 중인 화면입니다
      </Text>
      <div style={{ marginTop: 'auto', marginBottom: 24 }}>
        <BottomCTA.Double
          leftButton={
            <CTAButton color="dark" variant="weak" onClick={onBack}>
              이전
            </CTAButton>
          }
          rightButton={
            <CTAButton onClick={onNext}>
              다음
            </CTAButton>
          }
        />
      </div>
    </div>
  );
}
