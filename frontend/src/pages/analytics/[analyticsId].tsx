import { mdiChartTimelineVariant, mdiUpload } from '@mdi/js';
import Head from 'next/head';
import React, { ReactElement, useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';

import CardBox from '../../components/CardBox';
import LayoutAuthenticated from '../../layouts/Authenticated';
import SectionMain from '../../components/SectionMain';
import SectionTitleLineWithButton from '../../components/SectionTitleLineWithButton';
import { getPageTitle } from '../../config';

import { Field, Form, Formik } from 'formik';
import FormField from '../../components/FormField';
import BaseDivider from '../../components/BaseDivider';
import BaseButtons from '../../components/BaseButtons';
import BaseButton from '../../components/BaseButton';
import FormCheckRadio from '../../components/FormCheckRadio';
import FormCheckRadioGroup from '../../components/FormCheckRadioGroup';
import FormFilePicker from '../../components/FormFilePicker';
import FormImagePicker from '../../components/FormImagePicker';
import { SelectField } from '../../components/SelectField';
import { SelectFieldMany } from '../../components/SelectFieldMany';
import { SwitchField } from '../../components/SwitchField';
import { RichTextField } from '../../components/RichTextField';

import { update, fetch } from '../../stores/analytics/analyticsSlice';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';

import { hasPermission } from '../../helpers/userPermissions';

const EditAnalytics = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const initVals = {
    route: '',

    commuter_count: '',

    recorded_at: new Date(),

    organization: '',
  };
  const [initialValues, setInitialValues] = useState(initVals);

  const { analytics } = useAppSelector((state) => state.analytics);

  const { currentUser } = useAppSelector((state) => state.auth);

  const { analyticsId } = router.query;

  useEffect(() => {
    dispatch(fetch({ id: analyticsId }));
  }, [analyticsId]);

  useEffect(() => {
    if (typeof analytics === 'object') {
      setInitialValues(analytics);
    }
  }, [analytics]);

  useEffect(() => {
    if (typeof analytics === 'object') {
      const newInitialVal = { ...initVals };

      Object.keys(initVals).forEach(
        (el) => (newInitialVal[el] = analytics[el] || ''),
      );

      setInitialValues(newInitialVal);
    }
  }, [analytics]);

  const handleSubmit = async (data) => {
    await dispatch(update({ id: analyticsId, data }));
    await router.push('/analytics/analytics-list');
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Edit analytics')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={'Edit analytics'}
          main
        >
          {''}
        </SectionTitleLineWithButton>
        <CardBox>
          <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={(values) => handleSubmit(values)}
          >
            <Form>
              <FormField label='Route' labelFor='route'>
                <Field
                  name='route'
                  id='route'
                  component={SelectField}
                  options={initialValues.route}
                  itemRef={'routes'}
                  showField={'name'}
                ></Field>
              </FormField>

              <FormField label='CommuterCount'>
                <Field
                  type='number'
                  name='commuter_count'
                  placeholder='CommuterCount'
                />
              </FormField>

              <FormField label='RecordedAt'>
                <DatePicker
                  dateFormat='yyyy-MM-dd hh:mm'
                  showTimeSelect
                  selected={
                    initialValues.recorded_at
                      ? new Date(
                          dayjs(initialValues.recorded_at).format(
                            'YYYY-MM-DD hh:mm',
                          ),
                        )
                      : null
                  }
                  onChange={(date) =>
                    setInitialValues({ ...initialValues, recorded_at: date })
                  }
                />
              </FormField>

              {hasPermission(currentUser, 'READ_ORGANIZATIONS') && (
                <FormField label='organization' labelFor='organization'>
                  <Field
                    name='organization'
                    id='organization'
                    component={SelectField}
                    options={initialValues.organization}
                    itemRef={'organizations'}
                    showField={'name'}
                  ></Field>
                </FormField>
              )}

              <BaseDivider />
              <BaseButtons>
                <BaseButton type='submit' color='info' label='Submit' />
                <BaseButton type='reset' color='info' outline label='Reset' />
                <BaseButton
                  type='reset'
                  color='danger'
                  outline
                  label='Cancel'
                  onClick={() => router.push('/analytics/analytics-list')}
                />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

EditAnalytics.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'UPDATE_ANALYTICS'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default EditAnalytics;
