
import React, { useState } from 'react';
import {
  Asset,
  Text,
  ListHeader,
  List,
  ListRow,
  Checkbox,
  Spacing,
} from '@toss/tds-mobile';
import { adaptive } from '@toss/tds-colors';

const ARMY_LIST = [
  '육군',
  '공군',
  '해군, 해병대',
  '사회복무요원',
];

export default function Main2({ onBack, onSelect }) {
  const [selected, setSelected] = useState(null);

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

      {/* Spacing */}
      <Spacing size={10} />

      {/* ListHeader */}
      <ListHeader
        size="large"
        descriptionPosition="bottom"
        rightAlignment="center"
        titleWidthRatio={0.6}
        title={
          <ListHeader.TitleParagraph color="#191F28" typography="t4" fontWeight="bold">
            군종을 선택해주세요
          </ListHeader.TitleParagraph>
        }
      />

      {/* List */}
      <List>
        {ARMY_LIST.map((name, idx) => (
          <ListRow
            key={name}
            role="checkbox"
            aria-checked={selected === idx}
            contents={
              <ListRow.Texts
                type="1RowTypeA"
                top={name}
                topProps={{ color: '#191F28', fontWeight: 500 }}
              />
            }
            right={<Checkbox.Line size={24} checked={selected === idx} color={selected === idx ? '#3182F6' : '#D1D6DB'} />}
            onClick={() => {
              setSelected(idx);
              if (onSelect) onSelect(idx);
            }}
          />
        ))}
      </List>
    </div>
  );
}
