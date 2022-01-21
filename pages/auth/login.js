import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Layout } from 'components/Account/Layout';
import { AiOutlineEye, AiOutlineClose } from 'react-icons/ai';
import { userService, alertService } from 'services';
import axios from 'axios';
import {
  signIn,
  SessionProvider,
  getCsrfToken,
  getSession,
} from 'next-auth/react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';

export default function Login({ close }) {
  // form valid
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('No account exist with this email')
      .email('Email is invalid'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    acceptTerm: Yup.bool().oneOf([true], 'Accept is required'),
  });
  const formOption = { resolver: yupResolver(validationSchema) };

  // useForm() hook
  const { register, formState, reset, handleSubmit } = useForm(formOption);
  const { errors } = formState;

  // hide/show password
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  //login
  const router = useRouter();
  function onSubmit({ email, password }) {
    return userService
      .login(email, password)
      .then(() => {
        const returnUrl = router.query.returnUrl || '/home';
        router.push(returnUrl);
      })
      .catch(alertService.error);
  }
  return (
    <>
      <Layout>
        <div className="bg-background-auth">
          <Container className="py-5">
            <Row>
              <Col className="col-xl-4 col-lg-5 col-md-7 col-sm-9 mx-auto col_block--auth">
                <Card className="col_block--card p-2 position-relative">
                  <a className="btn btn_close" onClick={close}>
                    <AiOutlineClose />
                  </a>
                  <CardBody>
                    <CardTitle className="py-5">
                      <h1 className="font-bold">Welcome back to</h1>
                      <Image
                        src="/logo-ico.svg"
                        alt="7Hit Logo"
                        width={120}
                        height={50}
                      />
                    </CardTitle>
                    <CardSubtitle>
                      <Form
                        className="form-default"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        <FormGroup>
                          <Label for="Email">Email</Label>
                          <input
                            id="email"
                            name="email"
                            placeholder="Enter your email"
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
                        <FormGroup className="position-relative">
                          <Label className="text-right" for="password">
                            Password
                          </Label>
                          <input
                            id="password"
                            name="password"
                            placeholder="At least 6 characters"
                            type={passwordShown ? 'text' : 'password'}
                            {...register('password', { required: true })}
                            className={`form-control ${
                              errors.password ? 'is-invalid' : ''
                            }`}
                          />
                          <i
                            className="icon-hidden"
                            onClick={togglePasswordVisibility}
                          >
                            <AiOutlineEye />
                          </i>
                          <div className="invalid-feedback">
                            {errors.password?.message}
                          </div>
                        </FormGroup>
                        <Row className="mb-2" lg="2">
                          <Col>
                            <FormGroup>
                              <input
                                name="acceptTerm"
                                type="checkbox"
                                {...register('acceptTerm', { required: true })}
                                id="acceptTerm"
                                className={`col-1  ${
                                  errors.acceptTerm ? 'is-invalid' : ''
                                }`}
                              />{' '}
                              <div className="d-inline-flex">Remember Me</div>
                              <div className="invalid-feedback">
                                {errors.acceptTerm?.message}
                              </div>
                            </FormGroup>
                          </Col>
                          <Col className="text-end">
                            <div className="text-reset opacity-60 fs-14 ">
                              <Link href="/auth/forgot_password">
                                Forgot Password
                              </Link>
                            </div>
                          </Col>
                        </Row>
                        <FormGroup className="pt-5">
                          <Button
                            className="submit"
                            disabled={formState.isSubmitting}
                            block
                          >
                            {formState.isSubmitting && (
                              <span className="spinner-border spinner-border-sm mr-1"></span>
                            )}
                            Sign in
                          </Button>
                        </FormGroup>
                        <div className="pt-3 text-center">
                          <div className="text-reset opacity-60 fs-14">
                            Don`t have an account?{' '}
                            <span className="text-danger">
                              <Link href="/auth/register">Sign Up</Link>
                            </span>
                          </div>
                        </div>
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
