const db = require('../db.js');

exports.register = (req, res) => {
    const {
      UserType,
      Username,
      Password,
      Birthdate,
      PhoneNumber,
      Experience,
      DesiredLocation1,
      DesiredLocation2,
      DesiredLocation3,
      DesiredCrops1,
      DesiredCrops2,
      DesiredCrops3,
      DesiredSalary,
      FarmLocation,
      CultivatedCrops,
    } = req.body;
  
    // 사용자 정보를 Users 테이블에 삽입
    const userQuery = 'INSERT INTO users (UserType, Username, Password, Birthdate, PhoneNumber) VALUES (?, ?, ?, ?, ?)';
    db.query(userQuery, [UserType, Username, Password, Birthdate, PhoneNumber], (err, userResult) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: '회원가입 실패' });
      } else {
        const userID = userResult.insertId;
  
        // 농장주인 경우 Farmers 테이블에 삽입
        if (UserType === 'Farmer') {
          const farmerQuery = 'INSERT INTO Farmers (UserID, FarmLocation, CultivatedCrops) VALUES (?, ?, ?)';
          db.query(farmerQuery, [userID, FarmLocation, CultivatedCrops], (err, farmerResult) => {
            if (err) {
              console.error(err);
              res.status(500).json({ error: '회원가입 실패' });
            } else {
              res.status(200).json({ message: '회원가입 성공' });
            }
          });
        }
  
        // 구직자인 경우 Resumes 테이블에 삽입
        if (UserType === 'JobSeeker') {
          const resumeQuery = 'INSERT INTO Resumes (UserID, Experience, DesiredLocation1, DesiredLocation2, DesiredLocation3, DesiredCrops1, DesiredCrops2, DesiredCrops3, DesiredSalary) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
          db.query(
            resumeQuery,
            [userID, Experience, DesiredLocation1, DesiredLocation2, DesiredLocation3, DesiredCrops1, DesiredCrops2, DesiredCrops3, DesiredSalary],
            (err, resumeResult) => {
              if (err) {
                console.error(err);
                res.status(500).json({ error: '회원가입 실패' });
              } else {
                res.status(200).json({ message: '회원가입 성공' });
              }
            }
          );
        }
      }
    });
  };