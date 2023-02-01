const Status = () => {
  return (
    <div className="w-full text-center p-5 mb-6">
      <div className="sm:stats shadow-xl  shadow-blue-100 ring-1 ring-blue-200 ">
        <div className="stat place-items-center">
          <div className="stat-title">Products</div>
          <div className="stat-value">31K</div>
          {/* <div className="stat-desc">From January 1st to February 1st</div> */}
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Users</div>
          <div className="stat-value text-secondary">4,200</div>
          {/* <div className="stat-desc text-secondary">↗︎ 40 (2%)</div> */}
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Order complited</div>
          <div className="stat-value">1,200</div>
          {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
        </div>
      </div>
    </div>
  );
};

export default Status;
