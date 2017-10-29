class AnnotationsController < ApplicationController
    def create
      video_id = params[:video_id][:id]
      unless video = Video.find_by(yt_id: video_id)
        video = Video.create(yt_id: video_id)
      end

      annotation = Annotation.new(annotation_params)
      annotation.video = video
      annotation.save
      redirect_back fallback_location: { action: "index" }
    end

    def destroy
      Annotation.find(params[:id]).destroy
      redirect_back fallback_location: { action: "index" }
    end

    private

    def annotation_params
      params.permit(:id, :start, :end, :label, :vis_imp, :aud_imp, :valence, :arousal)
    end
end
