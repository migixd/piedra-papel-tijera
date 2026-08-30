const TYPES = Object.freeze({
  PIEDRA: 'PIEDRA',
  PAPEL: 'PAPEL',
  TIJERAS: 'TIJERAS',
});

class MoveVO {
  constructor(type) {
    this.type = type;
  }
}

MoveVO.TYPES = TYPES;

module.exports = MoveVO;
