class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.in_bounds(params[:bounds])
  end

  def create
    @bench = Bench.new(bench_params)

    if @bench.save
      render :show
    else
      render @bench.errors.full_messages
    end
  end

  private
  def bench_params
    params.require(:bench).permit(:description, :lat, :lng)
  end
end
