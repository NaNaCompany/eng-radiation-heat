export const tool = {
  "id": "E013",
  "title": "순복사 열전달률 계산기",
  "inputs_text": "방사율 ε [0~1], 면적 A [m²], 표면 T_s와 큰 주변면 T_sur [K]",
  "formula": "Q̇_net = ε σ_SB A (T_s⁴ − T_sur⁴)",
  "output_text": "표면 밖으로 나가는 순복사 열전달률 Q̇_net [W]",
  "assumptions": "A>0, 두 절대온도>0 K. 작은 회색 확산 표면이 큰 등온 주변면에 둘러싸이고 형상계수를 1로 볼 수 있는 경우에 한정한다. 섭씨 입력은 K로 변환 후 네제곱한다.",
  "purpose": "복사열 스테판 볼츠만 계산 / 고온 표면 열손실",
  "sources": [
    {
      "label": "OpenStax · Mechanisms of Heat Transfer",
      "url": "https://openstax.org/books/university-physics-volume-2/pages/1-6-mechanisms-of-heat-transfer"
    }
  ],
  "slug": "eng-radiation-heat",
  "category": "열",
  "result_label": "순복사 열전달률 Q̇_net",
  "result_dimension": "power",
  "fields": [
    {
      "key": "epsilon",
      "label": "방사율 ε",
      "dimension": "ratio",
      "example": 0.8,
      "constraint": "unitInterval",
      "display_unit": "1",
      "display_value": "0.8"
    },
    {
      "key": "a",
      "label": "표면적 A",
      "dimension": "area",
      "example": 1,
      "constraint": "positive",
      "display_unit": "m2",
      "display_value": "1"
    },
    {
      "key": "ts",
      "label": "표면 절대온도 T_s",
      "dimension": "temperature",
      "example": 400,
      "constraint": "positive",
      "display_unit": "K",
      "display_value": "400"
    },
    {
      "key": "te",
      "label": "주변면 절대온도 T_sur",
      "dimension": "temperature",
      "example": 300,
      "constraint": "positive",
      "display_unit": "K",
      "display_value": "300"
    }
  ],
  "site": "https://nanalab.kr/eng-radiation-heat/",
  "repository": "https://github.com/NaNaCompany/eng-radiation-heat",
  "condition": "",
  "output_unit": "W"
};
