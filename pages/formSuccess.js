import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function formSuccess(props) {
  return (
    <div className="container" style={{ minHeight: '100vh' }}>
      <div
        className="text-center"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
        }}
      >
        <h2 className="fw-bold">Congratulations!</h2>
        <h4 className="my-4">Your listing has been created</h4>
        <Link href="/home">
          <a className="btn btn-create">Back to Homepage</a>
        </Link>
        <div>
          <Link href="#">
            <a>
              <Image
                src="/product_detail/success.svg"
                alt="next"
                layout="intrinsic"
                width={645}
                height={628}
                priority="true"
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default formSuccess;
