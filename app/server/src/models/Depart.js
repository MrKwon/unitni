module.exports = (sequelize, DataTypes) => {
  const Depart = sequelize.define('Depart', {
    school: {
      type: DataTypes.ENUM,
      values: ['홍익대학교'],
      allowNull: false
    },
    college: {
      type: DataTypes.ENUM,
      values: ['공과', '경영', '문과', '법과', '사범', '미술', '경제', '자율전공학부', '건축'],
      allowNull: false
    },
    departs: {
      type: DataTypes.ENUM,
      values: ['도시공학', '토목공학',
        '전자전기공학',
        '컴퓨터공학', '산업공학',
        '신소재공학', '화학공학',
        '기계시스템디자인공학',
        '건축학', '실내건축학',
        '경영학',
        '영어영문학', '독어독문학', '불어불문학', '국어국문학',
        '법학',
        '수학교육', '국어교육', '영어교육', '역사교육',
        '동양화', '회화', '판화', '조소', '목조형가구학', '예술', '금속조형디자인', '도예유리', '섬유미술패션디자인', '자율전공', '시각디자인', '산업디자인',
        '경제학',
        '자율전공'],
      allowNull: false
    }
  }, {
    timestamps: false,
    paranoid: false,
    charset: 'utf8',
    collate: 'utf8_general_ci'
  })

  return Depart
}
