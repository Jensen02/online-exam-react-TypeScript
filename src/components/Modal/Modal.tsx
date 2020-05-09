import React, { useEffect } from 'react';
import { Modal, Form, Input, Select, Row, Col, Divider, Tooltip } from 'antd';
import { connect } from 'react-redux';
import { getProvinceList, getCityList, getSchoolList } from '../../actions';
import './Modal.less';
// import { SearchOutlined } from '@ant-design/icons';

const { Option } = Select;
const { Search } = Input;

interface TagSchoolProps {
  school: string;
  onClick: (school: string) => void
}

interface CityJson {
  id: number;
  name: string;
  parentid: number;
  parentname: string;
  areacode: string;
  zipcode: string;
  depth: number;
}

interface CollectionCreateFormProps {
  visible: boolean;
  onCreate: (values: any) => void;
  onCancel: () => void;
  province: CityJson[];
  city: CityJson[];
  school: any[];
  dispatch: any;
}

const TagSchool: React.FC<TagSchoolProps> = ({ school, onClick }) => {
  return (
    <Tooltip title={school}>
      <span className='school-item' onClick={() => onClick(school)}>
        { school }
      </span>
    </Tooltip>
  );
}

const ProvinceToCity: React.FC<CollectionCreateFormProps> = ({
  visible,
  onCreate,
  onCancel,
  province,
  city,
  school,
  dispatch
}) => {
  const [form] = Form.useForm();

  const handleProvinceChange = (value: string, option: any) => {
    console.log('val: ', value, option);
    dispatch(getCityList(parseInt(option.key, 10)));
  };
  const handleClick = (school: string) => {
    console.log('tag: ', school);
  }

  useEffect(() => {
    dispatch(getProvinceList());
    dispatch(getCityList(1));
    dispatch(getSchoolList('北京'));
  }, []);

  useEffect(() => {
    console.log('city: ', city);
  }, [city]);

  return (
    <Modal
      visible={visible}
      title="选择学校"
      okText="确定"
      cancelText="取消"
      onCancel={onCancel}
      width={800}
      bodyStyle={{
        height: '360px',
        padding: '15px 15px 10px'
      }}
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            form.resetFields();
            onCreate(values);
          })
          .catch(info => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <div className='select-city'>
        <Row>
          <Col span={7}>
            <Row>
              <Col span={6} style={{lineHeight: '32px'}}>
                <span>省份：</span>
              </Col>
              <Col span={16}>
                <Select
                  // defaultValue={province.length ? province[0].name : ''}
                  style={{ width: 120 }}
                  onChange={handleProvinceChange}
                >
                  {province && province.map(province => (
                    <Option key={province.id} value={province.name}>{province.name}</Option>
                  ))}
                </Select>
              </Col>
            </Row>
          </Col>
          <Col span={7}>
            <Row>
              <Col span={6} style={{lineHeight: '32px'}}>
                <span>城市：</span>
              </Col>
              <Col span={16}>
                <Select
                  defaultValue={city.length ? city[0].name : ''}
                  style={{ width: 120 }}
                  // onChange={handleProvinceChange}
                >
                  {city && city.map(city => (
                    <Option key={city.id} value={city.name}>{city.name}</Option>
                  ))}
                </Select>
              </Col>
            </Row>
          </Col>
          <Col span={10}>
            <Search placeholder="输入学校名称进行查询" loading enterButton />
          </Col>
        </Row>
      </div>
      <Divider style={{margin: '15px 0 10px'}} />
      <div className='school-list'>
        <TagSchool school='西安邮电大学asdasda' onClick={handleClick} />
        <TagSchool school='西安邮电大学asdasda' onClick={handleClick} />
        <TagSchool school='西安邮电大学asdasda' onClick={handleClick} />
        <TagSchool school='西安邮电大学asdasda' onClick={handleClick} />
        <TagSchool school='西安邮电大学asdasda' onClick={handleClick} />
        <TagSchool school='西安邮电大学asdasda' onClick={handleClick} />
        <TagSchool school='西安邮电大学asdasda' onClick={handleClick} />
        <TagSchool school='西安邮电大学asdasda' onClick={handleClick} />
      </div>
    </Modal>
  );
};

const mapStateToProps = (state: any) => {
  return {
    province: state.user.provinceList,
    city: state.user.cityList,
    school: state.user.schoolList
  };
}
const mapDispatchToProps = (dispatch: any) => {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProvinceToCity);