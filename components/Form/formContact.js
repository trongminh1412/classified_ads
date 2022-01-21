import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Layout } from 'components/Account/Layout';
import { AiOutlineClose } from 'react-icons/ai';
import { MdOutlineEmail } from 'react-icons/md';

import ReCAPTCHA from 'react-google-recaptcha';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Form,
  FormGroup,
  Label,
  Button,
} from 'reactstrap';

const KEY_CAPTCHA = '6LfiT9kZAAAAAKb-tU3-ZLQzu3NInie34QiFflcv';
const DELAY = 1500;

export default function FormContact({ close }) {
  // form valid
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Name is required'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    phone: Yup.string().required('Phone is required'),
  });
  const formOption = { resolver: yupResolver(validationSchema) };

  // useForm() hook
  const { register, formState, reset, handleSubmit } = useForm(formOption);
  const { errors } = formState;

  const router = useRouter();
  function onSubmit() {}

  return (
    <>
      <Layout>
        <div className="bg-background-auth">
          <Container className="py-5">
            <Row>
              <Col className="col-xl-6 col-lg-5 col-md-7 col-sm-9 mx-auto col_block--auth">
                <Card className="col_block--card p-2 position-relative">
                  <a className="btn btn_close" onClick={close}>
                    <AiOutlineClose />
                  </a>
                  <CardBody>
                    <CardTitle className="pt-2 pb-4">
                      <h5 className="font-bold">
                        <MdOutlineEmail /> Contact Author
                      </h5>
                    </CardTitle>
                    <CardSubtitle>
                      <Form
                        className="form-default"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        <FormGroup>
                          <Label className="text-right" for="username">
                            Name <span className="text-danger">*</span>
                          </Label>
                          <input
                            id="name"
                            name="username"
                            placeholder="Your name (Optional)"
                            type="text"
                            {...register('username', {
                              required: true,
                              maxLength: 10,
                            })}
                            className={`form-control ${
                              errors.username ? 'is-invalid' : ''
                            }`}
                          />
                          <div className="invalid-feedback">
                            {errors.username?.message}
                          </div>
                        </FormGroup>
                        <FormGroup>
                          <Label for="Email">
                            E-mail <span className="text-danger">*</span>
                          </Label>
                          <input
                            id="email"
                            name="email"
                            placeholder="i.e. you@gmail.com"
                            type="email"
                            {...register('email', { required: true })}
                            className={`form-control  ${
                              errors.email ? 'is-invalid' : ''
                            }`}
                          />
                          <div className="invalid-feedback">
                            {errors.email?.message}
                          </div>
                        </FormGroup>
                        <FormGroup>
                          <Label for="Phone">Phone Number</Label>
                          <input
                            id="phone"
                            name="phone"
                            placeholder="Phone number"
                            type="text"
                            {...register('phone', { required: true })}
                            className={`form-control  ${
                              errors.phone ? 'is-invalid' : ''
                            }`}
                          />
                          <div className="invalid-feedback">
                            {errors.phone?.message}
                          </div>
                        </FormGroup>
                        <FormGroup>
                          <Label className="text-right" for="username">
                            Message (500 max)
                            <span className="text-danger">*</span>
                          </Label>
                          <textarea
                            id="message"
                            name="message"
                            placeholder="Hi ... , Is this still available?"
                            type="tex"
                            {...register('message', {
                              required: true,
                              maxLength: 500,
                            })}
                            className="form-control"
                          />
                        </FormGroup>

                        <FormGroup>
                          <ReCAPTCHA
                            style={{ display: 'inline-block' }}
                            theme="light"
                            sitekey={KEY_CAPTCHA}
                          />
                        </FormGroup>
                        <FormGroup className="text-end border-top pt-4">
                          <Button
                            className="btn btn-create me-2"
                            disabled={formState.isSubmitting}
                          >
                            {formState.isSubmitting && (
                              <span className="spinner-border spinner-border-sm mr-1"></span>
                            )}
                            Send message
                          </Button>
                          <Button className="btn btn-create bg-light text-black">
                            Cancel
                          </Button>
                        </FormGroup>
                      </Form>
                    </CardSubtitle>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    </>
  );
}
