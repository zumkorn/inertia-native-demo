module ApplicationHelper
  def sprite_tag(name, **options)
    content_tag(:svg, **options) do
      "<use xlink:href=\"#{image_path("sprite-sheet.svg")}##{name}\">".html_safe
    end
  end

  def icon_tag(name, size: :medium, **options)
    class_name = [ "#{size}-icon", options.delete(:class) ].compact.join(" ")
    sprite_tag(name, **options.merge(class: class_name, aria: { hidden: "true" }))
  end
end
