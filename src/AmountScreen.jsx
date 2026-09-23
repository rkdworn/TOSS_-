import React, { useState } from 'react';
import { Asset, Text, BottomCTA, BoardRow } from '@toss/tds-mobile';

export default function AmountScreen({ onBack, onNext, amount }) {
  const [open, setOpen] = useState(false);
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
      {/* BoardRow: 금액 계산 설명 */}
      <div style={{ width: '100%', background: '#fff', margin: 0, padding: 0 }}>
        <BoardRow
          title={<span style={{ color: '#8b95a1', fontWeight: 600 }}>금액은 어떻게 계산된건가요?</span>}
          prefix={<BoardRow.Prefix style={{ color: '#3182f6', fontWeight: 700 }}>Q</BoardRow.Prefix>}
          icon={<BoardRow.ArrowIcon />}
          initialOpened
          style={{ borderBottom: '1px solid #F2F4F6', background: '#fff' }}
        >
          <BoardRow.Text style={{ color: '#8b95a1', fontWeight: 500 }}>
            가장 기본적인 금리5%에 매칭지원금을 포함해서 계산했어요<br />
            우대금리나 추후 정책변경으로 받는 금액은 달라질수있어요.
          </BoardRow.Text>
        </BoardRow>
      </div>
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Asset.Image
          frameShape={Asset.frameShape.CleanW100}
          backgroundColor="transparent"
          src="https://static.toss.im/3d/coin-dollar-apng.png"
          aria-hidden={true}
          style={{
            aspectRatio: '1/1',
            width: 100,
            height: 100,
            borderRadius: 0,
            opacity: 1,
            backdropFilter: 'blur(0px)',
          }}
        />
        <Text
          display="block"
          color="#333d4b"
          typography="t2"
          fontWeight="bold"
          textAlign="center"
          style={{
            width: 327,
            borderRadius: 0,
            opacity: 1,
            backdropFilter: 'blur(0px)',
            marginTop: 32,
            fontSize: 20,
          }}
        >
          전역 후 받을 수 있는 금액은
        </Text>
        <Text
          display="block"
          color="#333D4Bff"
          typography="t2"
          fontWeight="bold"
          textAlign="center"
          style={{
            width: 327,
            borderRadius: 0,
            opacity: 1,
            backdropFilter: 'blur(0px)',
            marginTop: 8,
            fontSize: 20,
          }}
        >
          {amount !== null ? amount.toLocaleString() + '원' : ''}
        </Text>
        <Text
          display="block"
          color="#333D4Bff"
          typography="t2"
          fontWeight="bold"
          textAlign="center"
          style={{
            width: 327,
            borderRadius: 0,
            opacity: 1,
            backdropFilter: 'blur(0px)',
            marginTop: 8,
            fontSize: 20,
          }}
        >
          이에요
        </Text>
      </div>
      {/* Bottom CTA */}
      <div style={{ marginTop: 'auto', marginBottom: 24 }}>
        <BottomCTA.Single loading={false} onClick={onNext ? onNext : undefined}>확인했어요</BottomCTA.Single>
      </div>
    </div>
  );
}
